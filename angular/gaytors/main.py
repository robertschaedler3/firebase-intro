import psycopg2 as psy

from pprint import PrettyPrinter
pp = PrettyPrinter(indent=4)

dbName = "zdwkvtfh"
dbUser = "zdwkvtfh"
dbPass = "Jc3rLhG14M9TR2U77iz8PX8Lgb-UyHZl"
dbHost = "queenie.db.elephantsql.com"
dbPort = "5432"

try:
    conn = psy.connect(database=dbName, user=dbUser,
                       password=dbPass, host=dbHost, port=dbPort)

    print("DB connect")
except:
    print("failed connect")

cur = conn.cursor()

# cur.execute("SELECT * FROM pg_catalog.pg_tables;;")

cur.execute("SELECT * FROM Trial;")
print(cur.fetchall())

# cur.execute("DROP TABLE TEST;")
# conn.commit()

conn.close()
