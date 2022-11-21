import sqlite3
import os


def create_db_file():
    """creates a sqlite database file in db folder"""
    os.mkdir("../db")
    f = open("../db/database.db", "w+")
    f.close()


def create_connection(db_file):
    """create a database connection to a SQLite database"""
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Exception as e:
        print(e)

    return conn
