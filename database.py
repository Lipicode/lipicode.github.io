import sqlite3

def create_connection():
    conn = sqlite3.connect('chati.db')
    return conn

def create_table():
    conn = create_connection()
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS messages
                 (id INTEGER PRIMARY KEY AUTOINCREMENT, message TEXT)''')
    conn.commit()
    conn.close()

def insert_message(message):
    conn = create_connection()
    c = conn.cursor()
    c.execute("INSERT INTO messages (message) VALUES (?)", (message,))
    conn.commit()
    conn.close()

def get_messages():
    conn = create_connection()
    c = conn.cursor()
    c.execute("SELECT * FROM messages")
    messages = c.fetchall()
    conn.close()
    return messages
  
