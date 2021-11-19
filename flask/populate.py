import psycopg2
import json

# js_ip=[]
# with open("../pages/db/Creditcard.json", 'r') as j:
#      contents = json.loads(j.read())
#      js_ip=contents
# conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
# cur=conn.cursor()

# print(js_ip[0])
# for i in js_ip:
#     cur.execute(f"insert into credit_card(c_id,credit_card_no,credit_score,credit_card_provider,credit_card_security_number,exp_date) values('{i['C_id']}','{i['Credit_Card_No']}','{i['Credit_Score']}','{i['Credit_Card_provider']}','{i['Credit_Card_Security_Number']}','{i['Expiry_Date']}');")
    
# cur.execute("select * from account_type;")
# print(cur.fetchall())
# cur.close()
# conn.commit()


js_ip=[]
with open("../pages/db/Employee.json", 'r') as j:
     contents = json.loads(j.read())
     js_ip=contents
conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
cur=conn.cursor()

print(js_ip[0])
for i in js_ip:
    cur.execute(f"insert into employee(employee_name,age,id,employee_address,b_id) values('{i['Name']}','{i['Age']}','{i['ID']}','{i['Address']}','{i['B_id']}');")
    
cur.execute("select * from account_type;")
print(cur.fetchall())
cur.close()
conn.commit()