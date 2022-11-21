import sqlite3
import os

DB = "../db/database.sqlite"


def create_db_file():
    """creates a sqlite database file in db folder"""
    if not os.path.exists(DB):
        os.mkdir("../db")
        f = open(DB, "w+")
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


def create_table():
    """create a table from the create_table_sql statement"""

    sql_create_table = """ CREATE TABLE IF NOT EXISTS data (
                                        id integer PRIMARY KEY,
                                        date datetime DEFAULT CURRENT_TIMESTAMP,
                                        temperature real NOT NULL,
                                        humidity real NOT NULL,
                                        soil_moisture integer NOT NULL
                                    ); """

    # create a database connection
    conn = create_connection(DB)

    c = conn.cursor()
    c.execute(sql_create_table)


def add_data(temperature, humidity, soil_moisture):
    """add data to the database"""
    sql = """ INSERT INTO data(temperature, humidity, soil_moisture)
              VALUES(?,?,?) """

    data = [temperature, humidity, soil_moisture]
    conn = create_connection(DB)
    cur = conn.cursor()
    cur.execute(sql, data)
    conn.commit()
    conn.close()


create_db_file()
create_table()
add_data(1, 2, 3)
