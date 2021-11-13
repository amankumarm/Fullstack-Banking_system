from flask import Flask
import psycopg2
app=Flask(__name__)
@app.route("/")
def root():
    conn = None
    commands=["SELECT * FROM login;"]
    try:
        # read the connection parameters
        # connect to the PostgreSQL server
        conn = psycopg2.connect(host="localhost",database="Bank",user="postgres",password="amankumarm")
        cur = conn.cursor()
        # create table one by one
        for command in commands:
            a=cur.execute(command)
            print(cur.fetchall())
        # close communication with the PostgreSQL database server
        cur.close()
        # commit the changes
        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
    return "q"

if __name__=="__main__":
    app.run()