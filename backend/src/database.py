import sqlite3
import os
import logger

log = logger.getLogger(__name__)

DB = "../data/db/database.sqlite"


class Database:
    def __init__(self) -> None:
        if not os.path.exists(DB):
            os.makedirs("../data/db")
            f = open(DB, "w+")
            f.close()

        self.conn = self.create_connection(DB)
        self.create_table()

    def create_connection(self, db_file):
        """create a database connection to a SQLite database"""
        conn = None
        try:
            conn = sqlite3.connect(db_file)
            log.info("Connected to database")
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
        log.info("Added data to database")

    def get_data(self):
        """get data from the database"""
        sql = """ SELECT * FROM data """

        cur = self.conn.cursor()
        cur.execute(sql)
        rows = cur.fetchall()
        data = []
        for row in rows:
            data.append(
                {
                    "id": row[0],
                    "date": row[1],
                    "temperature": row[2],
                    "humidity": row[3],
                    "soil_moisture": row[4],
                }
            )
        return data
