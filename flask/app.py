from flask import Flask,request,Response
from flask_cors import CORS
import psycopg2
import flask
import json
app=Flask(__name__)
CORS(app)
@app.route("/login",methods=['POST' ])
def root():
    # print(request.get_data())
    # bodyObj=json.loads(
    # )
    username=request.get_json()['username']
    password=request.get_json()['password']
    conn = None
    # commands=["SELECT * FROM login;"]
    result={}
    try:
        conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
        cur = conn.cursor()
        cur.execute(f"select u_id from web_access where username='{username}' and password='{password}' ")
        result=cur.fetchone()
        cur.close()
        conn.commit()
        response = flask.Response(json.dumps({"op":result}))
        response.headers["Authtoken"] = "gerg"
        return response
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
    print(result)
    return json.dumps(result)




@app.route("/customerDetails/<custid>",methods=['GET'])
def custDetails(custid):
    try:
        conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
        cur = conn.cursor()
        cur.execute(f"select * from customer,account_type where C_id='{custid}' and account_type.id=customer.account_type ")
        result=cur.fetchone()
        cur.close()
        conn.commit()
        response = flask.Response(json.dumps({"op":result}))
        response.headers["Authtoken"] = "gerg"
        return response
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
    print(result)
    return json.dumps(result)

    
if __name__=="__main__":
    app.run(debug=True)