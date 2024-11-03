import sqlite3
from flask_bcrypt import Bcrypt

# Initialize bcrypt
bcrypt = Bcrypt()

# Generate hashed password
hashed_password = bcrypt.generate_password_hash('adminpassword').decode('utf-8')

# Connect to the SQLite database
conn = sqlite3.connect('main.db')
cursor = conn.cursor()

# Create the user table if it doesn't exist
cursor.execute('''
    CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        domain TEXT NOT NULL,
        organization_name TEXT NOT NULL,
        organization_type TEXT NOT NULL,
        organization_website TEXT NOT NULL,
        verified BOOLEAN NOT NULL,
        verification_token TEXT,
        isAdmin BOOLEAN NOT NULL
    )
''')

# Insert a new admin user
cursor.execute('''
    INSERT INTO user (username, password, email, domain, organization_name, organization_type, organization_website, verified, verification_token, isAdmin)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
''', ('admin', hashed_password, 'admin@example.com', 'example.com', 'Admin Organization', 'Admin', 'admin.org', 1, None, 1))

# Commit the transaction and close the connection
conn.commit()
conn.close()

print('Admin user added successfully.')
