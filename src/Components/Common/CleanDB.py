from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///incidents.db'
db = SQLAlchemy(app)

class IncidentModel(db.Model):
    id = db.Column(db.String, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    detection_method = db.Column(db.String, nullable=False)
    prevention_method = db.Column(db.String, nullable=False)
    created_at = db.Column(db.String, nullable=False)

def clear_database():
    with app.app_context():
        num_rows_deleted = db.session.query(IncidentModel).delete()
        db.session.commit()
        print(f"{num_rows_deleted} incidents deleted")

if __name__ == '__main__':
    clear_database()
