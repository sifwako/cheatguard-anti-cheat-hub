from flask import Flask, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import uuid
import json

app = Flask(__name__, static_folder='../../../build', static_url_path='/')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///incidents.db'
db = SQLAlchemy(app)

class IncidentModel(db.Model):
    id = db.Column(db.String, primary_key=True)
    technique_name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    detection_method = db.Column(db.String, nullable=False)
    created_at = db.Column(db.String, nullable=False)
    indicators = db.Column(db.String, nullable=True)
    mitigation_strategies = db.Column(db.String, nullable=True)
    items_used = db.Column(db.String, nullable=True)
    contributor_organization = db.Column(db.String, nullable=True)
    contributor_contact = db.Column(db.String, nullable=True)

def create_db():
    with app.app_context():
        db.create_all()

def get_next_incident_id():
    last_incident = IncidentModel.query.order_by(IncidentModel.id.desc()).first()
    if last_incident:
        last_id = int(last_incident.id.split('-')[1])
        return last_id + 1
    else:
        return 1

@app.route('/')
def index():
    return app.send_static_file('test.html')

@app.route('/taxci/discovery', methods=['GET'])
def discovery():
    services = {
        "services": [
            {"name": "Collection Management", "url": "/taxci/collections"},
            {"name": "Poll Service", "url": "/taxci/poll"},
            {"name": "Inbox Service", "url": "/taxci/inbox"}
        ]
    }
    return jsonify(services)

@app.route('/taxci/collections', methods=['POST'])
def create_collection():
    collection_id = f"collection-{get_next_incident_id()}"
    return jsonify({"collection_id": collection_id})

@app.route('/taxci/inbox', methods=['POST'])
def inbox():
    data = request.get_json()
    from ecix import CheatingIncident
    incident = CheatingIncident(
        technique_name=data.get('technique_name'),
        description=data.get('description'),
        detection_method=data.get('detection_method'),
        created_at=data.get('created_at', datetime.utcnow().isoformat()),
        indicators=data.get('indicators', []),
        mitigation_strategies=data.get('mitigation_strategies', []),
        items_used=data.get('items_used', []),
        contributor_organization=data.get('contributor_organization'),
        contributor_contact=data.get('contributor_contact')
    )
    next_id = get_next_incident_id()
    incident.set_id(next_id)
    incident_model = IncidentModel(
        id=incident.id,
        technique_name=incident.technique_name,
        description=incident.description,
        detection_method=incident.detection_method,
        created_at=incident.created_at,
        indicators=json.dumps(incident.indicators),
        mitigation_strategies=json.dumps(incident.mitigation_strategies),
        items_used=json.dumps(incident.items_used),
        contributor_organization=incident.contributor_organization,
        contributor_contact=incident.contributor_contact
    )
    db.session.add(incident_model)
    db.session.commit()
    return jsonify({"status": "success", "incident_id": incident.id}), 201

@app.route('/taxci/poll', methods=['GET'])
def poll():
    incidents = IncidentModel.query.all()
    incidents_list = []
    for incident in incidents:
        incidents_list.append({
            "id": incident.id,
            "technique_name": incident.technique_name,
            "description": incident.description,
            "detection_method": incident.detection_method,
            "created_at": incident.created_at,
            "indicators": json.loads(incident.indicators) if incident.indicators else [],
            "mitigation_strategies": json.loads(incident.mitigation_strategies) if incident.mitigation_strategies else [],
            "items_used": json.loads(incident.items_used) if incident.items_used else [],
            "contributor_organization": incident.contributor_organization,
            "contributor_contact": incident.contributor_contact
        })
    return jsonify(incidents_list)

@app.route('/<path:path>')
def static_proxy(path):
    return app.send_static_file(path)

if __name__ == '__main__':
    create_db()
    app.run(debug=True, port=5001)
