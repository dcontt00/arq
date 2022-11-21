import sqlite3
import os

DB = "../db/database.sqlite"


class Database:
    def __init__(self) -> None:
        if not os.path.exists(DB):
            os.mkdir("../db")
            f = open(DB, "w+")
            f.close()

        self.conn = self.create_connection(DB)
        self.create_table()

    def create_connection(self, db_file):
        """create a database connection to a SQLite database"""
        conn = None
        try:
            conn = sqlite3.connect(db_file)
            return conn
        except Exception as e:
            print(e)

        return conn

    def create_table(self):
        """create a table from the create_table_sql statement"""

        sql_create_table = """ CREATE TABLE IF NOT EXISTS data (
                                            id integer PRIMARY KEY,
                                            date datetime DEFAULT CURRENT_TIMESTAMP,
                                            temperature real NOT NULL,
                                            humidity real NOT NULL,
                                            soil_moisture integer NOT NULL
                                        ); """

        c = self.conn.cursor()
        c.execute(sql_create_table)

    def add_data(self, temperature, humidity, soil_moisture):
        """add data to the database"""
        sql = """ INSERT INTO data(temperature, humidity, soil_moisture)
                VALUES(?,?,?) """

        data = [temperature, humidity, soil_moisture]

        cur = self.conn.cursor()
        cur.execute(sql, data)
        self.conn.commit()
