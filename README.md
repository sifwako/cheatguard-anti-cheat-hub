# CheatGuard
**CheatGuard** is a cybersecurity-inspired, AI-enhanced anti-cheating knowledge base framework designed for Higher Education Institutions (HEIs). Inspired by the [MITRE ATT&CK framework](https://attack.mitre.org/), CheatGuard systematically categorizes academic dishonesty tactics, techniques, and mitigation strategies across different types of assessments (e.g., exams, assignments, projects, vivas).

### Project Overview
Academic integrity is increasingly challenged by the rapid evolution of AI and technology-enabled cheating techniques. CheatGuard addresses this by providing a centralized, continuously updated repository of cheating methods and corresponding countermeasures.

The framework helps institutions design secure assessments, monitor academic integrity, detect misconduct, and share insights collaboratively — much like how MITRE ATT&CK strengthens cybersecurity defenses.

### Key Features
- **Knowledge Base**: Structured like MITRE ATT&CK but tailored to education, CheatGuard organizes academic cheating data by assessment type.
- **Tactics → Techniques → Sub-techniques → Procedures**: Drill-down structure that captures the how and why of student cheating behavior.
- **Detection & Mitigation**: Each technique includes practical strategies to detect and prevent cheating.
- **AI Agent**: Automatically scrapes online sources and uses LLMs to extract and recommend updates to the knowledge base.
- **Incident Reporting Portal**: Allows verified academic staff to submit real-world cheating cases.
- **Collaborative and Open**: Built to foster transparency and inter-institutional collaboration.

### Tech Stack
- **Frontend**: React.js
- **Backend**: Flask (Python)
- **Database**: SQLite
- **AI Automation**: Python + GPT-4o (OpenAI) or Llama 3.2 (via Ollama) for local inference

### Update Mechanisms
- **Manual Updates**: Conducted by trained staff and verified student assistants.
- **AI-Powered Updates**: Monthly automated web searches and information extraction via LLMs.
- **Admin Review**: All updates are verified by system administrators before integration.

