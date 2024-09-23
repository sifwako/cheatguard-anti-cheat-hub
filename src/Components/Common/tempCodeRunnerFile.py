from flask import Flask, request, jsonify, render_template, redirect, url_for, flash, abort, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail, Message
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_migrate import Migrate
from functools import wraps
import uuid
from datetime import datetime as dt, timezone
import json
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///main.db'
app.config['MAIL_SERVER'] = 'smtp.mailtrap.io'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'ff95b9f1c0b9f0'
app.config['MAIL_PASSWORD'] = 'fb2cb7fd1bf22c'
app.config['SECRET_KEY'] = 'supersecretkeythatshouldberandomandlong'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'uploads/evidence'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # Limit upload size to 16MB

db = SQLAlchemy(app)
migrate = Migrate(app, db)
mail = Mail(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    domain = db.Column(db.String(120), nullable=False)
    organization_name = db.Column(db.String(120), nullable=False)
    organization_type = db.Column(db.String(50), nullable=False)
    organization_website = db.Column(db.String(120), nullable=False)
    verified = db.Column(db.Boolean, default=False)
    verification_token = db.Column(db.String(120), unique=True, nullable=True)
    isAdmin = db.Column(db.Boolean, default=False)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not current_user.isAdmin:
            abort(403)  # Forbidden
        return f(*args, **kwargs)
    return decorated_function

class CTI(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    incident_id = db.Column(db.String, nullable=False, unique=True)
    technique_name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    detection_method = db.Column(db.String, nullable=False)
    created_at = db.Column(db.String, default=lambda: dt.now(timezone.utc))
    indicators = db.Column(db.String)
    mitigation_strategies = db.Column(db.String)
    items_used = db.Column(db.String)
    contributor_organization = db.Column(db.String)
    contributor_contact = db.Column(db.String)
    evidence = db.Column(db.String)  # New column for storing file path

def create_db():
    print("Checking and creating the database if it doesn't exist...")
    with app.app_context():
        try:
            db.create_all()
            print("Database checked/created successfully.")
        except Exception as e:
            print(f"Error creating the database: {e}")

def get_next_incident_id():
    last_incident = CTI.query.order_by(CTI.id.desc()).first()
    if last_incident:
        last_id = int(last_incident.incident_id.split(' ')[1])
        next_id = last_id + 1
    else:
        next_id = 1
    return f"Incident {next_id:03d}"

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        data = request.form
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')
        domain = email.split('@')[1]
        organization_name = data.get('organization_name')
        organization_type = data.get('organization_type')
        organization_website = data.get('organization_website')

        if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
            flash("User already exists", "error")
            return redirect(url_for('register'))

        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        verification_token = str(uuid.uuid4())

        new_user = User(username=username, password=hashed_password, email=email, domain=domain,
                        organization_name=organization_name, organization_type=organization_type,
                        organization_website=organization_website, verified=False, verification_token=verification_token)
        db.session.add(new_user)
        db.session.commit()

        send_verification_email(new_user)
        flash("Registration successful, please check your email to verify your account", "success")
        return redirect(url_for('login'))

    return render_template('register.html')

def send_verification_email(user):
    token = user.verification_token
    msg = Message('Verify Your Email', sender=app.config['MAIL_USERNAME'], recipients=[user.email])
    msg.body = f'Dear Valued Customer,\n\nThank you for registering with Educational Cheating Incident Expression (ECIX) platform. To complete your registration, please verify your email address by clicking the link below:\n\nhttp://localhost:5001/verify/{token}\n\nIf you did not register for an account, please ignore this email or contact our support team at support@cheatguard.com\n\nWe are excited to have you on board!\nBest regards,\nCheat Guard Team.'
    mail.send(msg)

@app.route('/verify/<token>', methods=['GET'])
def verify_email(token):
    user = User.query.filter_by(verification_token=token).first()
    if user:
        user.verified = True
        user.verification_token = None
        db.session.commit()
        flash("Email verified successfully", "success")
        return redirect(url_for('login'))
    flash("Invalid verification token", "error")
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.form
        username = data.get('username')
        password = data.get('password')

        user = User.query.filter_by(username=username).first()
        if user and bcrypt.check_password_hash(user.password, password):
            if not user.verified:
                flash("Please verify your email address first", "error")
                return redirect(url_for('login'))
            login_user(user)
            flash("Login successful", "success")
            return redirect(url_for('index'))

        flash("Invalid credentials", "error")
        return redirect(url_for('login'))

    return render_template('login.html')

@app.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    flash("Logout successful", "success")
    return redirect(url_for('login'))

@app.route('/')
@login_required
def index():
    return render_template('IncidentReport.html', isAdmin=current_user.isAdmin)

@app.route('/taxci/discovery', methods=['GET'])
@login_required
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
@login_required
def create_collection():
    collection_id = f"collection-{uuid.uuid4()}"
    return jsonify({"collection_id": collection_id})

@app.route('/taxci/inbox', methods=['POST'])
@login_required
def inbox():
    try:
        data = request.form
        technique_name = data.get('technique_name')
        description = data.get('description')
        detection_method = data.get('detection_method')
        indicators = data.get('indicators', '').split(',')
        mitigation_strategies = data.get('mitigation_strategies', '').split(',')
        items_used = data.get('items_used', '').split(',')
        contributor_organization = data.get('contributor_organization')
        contributor_contact = data.get('contributor_contact')
        
        evidence_file = request.files.get('evidence')
        evidence_filename = None
        
        if evidence_file:
            evidence_filename = secure_filename(evidence_file.filename)
            evidence_file.save(os.path.join(app.config['UPLOAD_FOLDER'], evidence_filename))

        incident = CTI(
            incident_id=get_next_incident_id(),
            technique_name=technique_name,
            description=description,
            detection_method=detection_method,
            created_at=dt.now(timezone.utc),
            indicators=json.dumps(indicators),
            mitigation_strategies=json.dumps(mitigation_strategies),
            items_used=json.dumps(items_used),
            contributor_organization=contributor_organization,
            contributor_contact=contributor_contact,
            evidence=evidence_filename
        )
        db.session.add(incident)
        db.session.commit()
        return jsonify({"status": "success", "incident_id": incident.incident_id}), 201
    except Exception as e:
        print(f"Failed to publish incident: {e}")
        return jsonify({"status": "error", "message": "Failed to publish incident"}), 500

@app.route('/taxci/poll', methods=['GET'])
@login_required
@admin_required
def poll():
    try:
        incidents = CTI.query.all()
        incidents_list = []
        for incident in incidents:
            incidents_list.append({
                "id": incident.incident_id,
                "technique_name": incident.technique_name,
                "description": incident.description,
                "detection_method": incident.detection_method,
                "created_at": incident.created_at,
                "indicators": json.loads(incident.indicators),
                "mitigation_strategies": json.loads(incident.mitigation_strategies),
                "items_used": json.loads(incident.items_used),
                "contributor_organization": incident.contributor_organization,
                "contributor_contact": incident.contributor_contact,
                "evidence": incident.evidence
            })
        return jsonify(incidents_list)
    except Exception as e:
        print(f"Failed to retrieve incidents: {e}")
        return jsonify({"status": "error", "message": "Failed to retrieve incidents"}), 500

@app.route('/uploads/evidence/<filename>')
@login_required
@admin_required
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    create_db()
    app.run(debug=True, port=5001)
