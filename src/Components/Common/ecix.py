import json
from datetime import datetime

class CheatingIncident:
    def __init__(self, technique_name, description, detection_method, created_at,
                 indicators=None, mitigation_strategies=None,
                 items_used=None, contributor_organization=None, contributor_contact=None):
        self.id = None  # ID will be set externally
        self.technique_name = technique_name
        self.description = description
        self.detection_method = detection_method
        self.created_at = created_at
        self.indicators = indicators if indicators else []
        self.mitigation_strategies = mitigation_strategies if mitigation_strategies else []
        self.items_used = items_used if items_used else []
        self.contributor_organization = contributor_organization
        self.contributor_contact = contributor_contact

    def to_json(self):
        return json.dumps(self.__dict__, indent=4)

    def set_id(self, new_id):
        self.id = f"incident-{new_id:03d}"