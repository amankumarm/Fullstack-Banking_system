from typing import ValuesView
from flask import Flask,request,Response
from psycopg2.extensions import NoneAdapter
from flask_cors import CORS
import psycopg2
import flask
import uuid
import json
import string, random
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
        return response
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
    print(result)
    return json.dumps(result)




@app.route('/c/sendMoney',methods=['POST'])
def sendMoney():
    inc_obj=request.get_json()
    #check Balance 
    try:
        conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
        cur = conn.cursor()
        cur.execute(f"select acc_balance from customer c_id='{inc_obj['cust_id']}';")
        result=cur.fetchone()[0]
        if(inc_obj['sendingMoney']>result):
            response = flask.Response(json.dumps({"op":[" Not enough Balance "]}))
            return response
        
        cur.execute(f"select acc_no from customer acc_no='{inc_obj['acc_no']}';")
            # check for existing acc 
            # send money add this detail to transaction table
        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        return error
    finally:
        if conn is not None:
            conn.close()




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
        return response
    except (Exception, psycopg2.DatabaseError) as error:
        return error
    finally:
        if conn is not None:
            conn.close()
    print(result)
    return json.dumps(result)

# @app.route("/getusername/<username>",methods=['GET'])
# def get_username(username):
#         try:
#             conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
#             cur = conn.cursor()
#             cur.execute(f"select customer_name from customer where C_id='{username}'")
#             result=cur.fetchone()
#             cur.close()
#             conn.commit()
#             response = flask.Response(json.dumps({"op":result}))
#             return response
#         except (Exception, psycopg2.DatabaseError) as error:
#             return error
#         finally:
#             if conn is not None:
#                 conn.close()
@app.route("/getusername/<user>/<username>",methods=['GET'])
def get_emp_username(user,username):
        print(user,username,type(user),type(username))
        if (user=='b'):
            statement=f"select employee_name from employee where id='{username}';"  
            try:
                conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
                cur = conn.cursor()
                cur.execute(statement)
                result=cur.fetchone()
                cur.close()
                conn.commit()
                response = flask.Response(json.dumps({"op":result}))
                return response
            except (Exception, psycopg2.DatabaseError) as error:
                return error
            finally:
                if conn is not None:
                    conn.close()
        elif (user=='c'):
            print("c")
            statement=f"select customer_name from customer where C_id='{username}';"
            try:
                conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
                cur = conn.cursor()
                cur.execute(statement)
                result=cur.fetchone()
                cur.close()
                conn.commit()
                response = flask.Response(json.dumps({"op":result}))
                return response
            except (Exception, psycopg2.DatabaseError) as error:
                return error
            finally:
                if conn is not None:
                    conn.close()  
        
        return "op"
        


@app.route("/getAccountBalance/<cid>",methods=['GET'])
def get_AccountBalance(cid):
        try:
            conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
            cur = conn.cursor()
            cur.execute(f"select acc_balance from customer where C_id='{cid}'")
            result=cur.fetchone()
            cur.close()
            conn.commit()
            response = flask.Response(json.dumps({"op":result}))
            return response
        except (Exception, psycopg2.DatabaseError) as error:
            return error
        finally:
            if conn is not None:
                conn.close()



@app.route('/b/getCustomerDetails',methods=['POST'])
def getCustomerDetail():
    body = request.get_json()
    try:
        conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
        cur = conn.cursor()
        cur.execute(f"select customer_name,age,acc_no,customer_address,acc_balance,aadhar_no,acc_status,ac.account_type from customer  as c, account_type as ac where b_id in (select b_id from employee where id='{body['token']}') and c.account_type=id;")
        result=cur.fetchall()
        cur.close()
        conn.commit()
        response = flask.Response(json.dumps({"op":result}))
        return response
    except (Exception, psycopg2.DatabaseError) as error:
        return error
    finally:
        if conn is not None:
            conn.close()
    return "q"


@app.route('/b/addNewUser',methods=['POST'])
def addNewUser():                   # incomplete
    newUserObject = request.get_json()
    print(newUserObject)
    # newUserObject[]
    try:
        conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
        cur = conn.cursor()
        cur.execute(f"select b_id from employee where id='{newUserObject['token']}';")
        result=cur.fetchone()
        # print(type(result),result[0])
        newUserObject['b_id']=result[0]
        f=0
        while f==0:
            x = ''.join(random.choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for _ in range(16))
            x=str(x)
            cur.execute(f"select acc_no from customer where acc_no='{x}'")
            result=cur.fetchone()
            if result==None:
                f=1
                newUserObject['acc_no']=x
        g=0
        while g==0:
            new_cid=str(uuid.uuid4())
            cur.execute(f"select c_id from customer where c_id='{new_cid}'")
            result=cur.fetchone()
            if result==None:
                g=1
                newUserObject['c_id']=new_cid
        
        print(newUserObject)
        name=newUserObject['Name']
        age=int(newUserObject['Age'])
        c_id=newUserObject['c_id']
        acc_no=newUserObject['acc_no']
        add_=newUserObject['Address']
        acc_bal=0
        adhaar=int(newUserObject['AdhaarNo'])
        b_id=int(newUserObject['b_id'])
        acc_status="Present"
        acc_type=int(newUserObject['acctype'])
        cur.execute(f"INSERT INTO CUSTOMER VALUES('{name}',{age},'{acc_no}','{c_id}','{add_}',{acc_bal},{adhaar},{b_id},'{acc_status}',{acc_type});")
        # result=cur.fetchall()
        print(result)
        # result=[]
        conn.commit()
        cur.close()
        print("Aman")
        response = flask.Response(json.dumps({"op":[1]}))
        return response
    except (Exception, psycopg2.DatabaseError) as error:
        print("err",error)
        response = flask.Response(json.dumps({"op":[0]}))
        return response
    finally:
            if conn is not None:
                conn.close()


@app.route('/b/addNewLoan',methods=['POST'])
def addLoan():
    newLoanObject = request.get_json()
    try:
        conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
        cur = conn.cursor()
        cur.execute(f"select * from loan;")
        result=cur.fetchall()
        newLoanObject['newLoanId']=len(result)+1
        cur.execute(f"select c_id from customer where acc_no='{newLoanObject['accno']}';")
        newLoanObject['c_id']=cur.fetchone()[0]
        cur.execute(f"select id from employee where id='{newLoanObject['token']}';")
        newLoanObject['emp_id']=cur.fetchone()[0]
        print(newLoanObject) 
        cur.execute(f"insert into loan values('{newLoanObject['newLoanId']}','{newLoanObject['c_id']}','{newLoanObject['emp_id']}','{newLoanObject['Amount']}','{newLoanObject['int']}','Ongoing','{newLoanObject['loantype']}','{newLoanObject['Dur']}')")
        cur.close()
        conn.commit()
        response = flask.Response(json.dumps({"op":[1]}))
        return response
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
        response = flask.Response(json.dumps({"op":[0]}))
        return response
    finally:
        if conn is not None:
            conn.close()

@app.route('/c/initiateTransaction',methods=['POST'])
def initTransaction():
    req_body=request.get_json()
    print(req_body)
    try:
        conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
        conn.autocommit=True
        cur = conn.cursor()
        cur.execute("begin")
    # check whether the acc exist
        cur.execute(f"select c_id from customer where acc_no='{req_body['toAccountNumber']}';")
        toAcc_cid=cur.fetchone()
        if toAcc_cid==None:
            response = flask.Response(json.dumps({"op":[1],"msg":"The account doesnt exist."}))
            return response
        #check the balance 
        cur.execute(f"select acc_balance from customer where c_id='{req_body['token']}';")
        balance=cur.fetchone()[0]
        if balance<int(req_body['amount']):
            response = flask.Response(json.dumps({"op":[1],"msg":"not enough balance"}))
            return response
        # every thing okay send money
        sendersNewBalance=balance-int(req_body['amount'])
        cur.execute("""update customer set acc_balance=acc_balance-%s where c_id=%s;""",(req_body['amount'],req_body['token']))
        cur.execute("update customer set acc_balance=acc_balance + %s where c_id=%s;",(req_body['amount'],req_body['toAccountNumber']))
        cur.execute("select * from user_transactions;")
        new_transaction_id=len(cur.fetchall())
        print(new_transaction_id)
        cur.execute("""insert into user_transactions(to_cid,from_cid,date_time,transaction_status,amount,id) values(%s,%s,%s,%s,%s,%s);""",(toAcc_cid,req_body['token'],req_body['Date'],'1',req_body['Amount'],new_transaction_id))
        conn.commit()
        
        response = flask.Response(json.dumps({"op":[1],"msg":"done"}))
        return response
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
        response = flask.Response(json.dumps({"op":[0]}))
        return response
    finally:
        if conn is not None:
            conn.close()


if __name__=="__main__":
    app.run(debug=True)