from flask import Flask,request,Response
from flask_cors import CORS
import psycopg2
import json
app=Flask(__name__)
CORS(app)
@app.route("/loginDetails")
def root():
    conn = None
    commands=["SELECT * FROM login;"]
    result={}
    try:
        # read the connection parameters
        # connect to the PostgreSQL server
        conn = psycopg2.connect(host="localhost",database="Bank",user="postgres",password="amankumarm")
        cur = conn.cursor()
        # create table one by one
        for command in commands:
            cur.execute(command)
            result=cur.fetchone()
        cur.close()
        conn.commit()
        response = Response()
        response.headers["Authtoken"] = "gerg"
        return json.dumps({"op":result})
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
    return "q"
@app.route('/getroute')
def get_headers():
    print(request.headers.get("Authtoken"))
    return "s"
if __name__=="__main__":
    app.run()