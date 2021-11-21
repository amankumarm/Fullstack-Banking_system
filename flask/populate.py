from typing import Counter, Set
import psycopg2
import json
import random

# # js_ip=[]
# # with open("../pages/db/Creditcard.json", 'r') as j:
# #      contents = json.loads(j.read())
# #      js_ip=contents
# # conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
# # cur=conn.cursor()

# # print(js_ip[0])
# # for i in js_ip:
# #     cur.execute(f"insert into credit_card(c_id,credit_card_no,credit_score,credit_card_provider,credit_card_security_number,exp_date) values('{i['C_id']}','{i['Credit_Card_No']}','{i['Credit_Score']}','{i['Credit_Card_provider']}','{i['Credit_Card_Security_Number']}','{i['Expiry_Date']}');")
    
# # cur.execute("select * from account_type;")
# # print(cur.fetchall())
# # cur.close()
# # conn.commit()


# js_ip=[]
# with open("../pages/db/Transaction.json", 'r') as j:
#      contents = json.loads(j.read())
#      js_ip=contents
# conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
# cur=conn.cursor()

# print(js_ip[0])
# c=1
# for i in js_ip:
#     # cur.execute(f"insert into user_transactions(transaction_id,to_cid,from_cid,date_time,transaction_status) values('{i['Transaction_id']}','{i['To_Cid']}','{i['From_Cid']}','{i['Date']}','{i['Status']}');")
#     c=c+1
# cur.execute("select * from user;")
# print(cur.fetchall())
# cur.close()
# conn.commit()


# # js_ip=[]
# # with open("../pages/db/loantype.json", 'r') as j:
# #      contents = json.loads(j.read())
# #      js_ip=contents
# # conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
# # cur=conn.cursor()

# # print(js_ip[0])
# # for i in js_ip:
# #     cur.execute(f"insert into loan_type(id,l_type) values('{i['ID']}','{i['Loan_Type']}');")
    
# # cur.execute("select * from loan_type;")
# # print(cur.fetchall())
# # cur.close()
# # conn.commit()



# # print(js_ip[0])
# # cur.execute("select * from loan_type;")
# # print(cur.fetchall())
# # cur.close()
# # conn.commit()


# js_ip=[]
# with open("../pages/db/webaccess.json", 'r') as j:
#      contents = json.loads(j.read())
#      js_ip=contents
conn = psycopg2.connect(host="localhost",database="dbms",user="postgres",password="amankumarm")
cur=conn.cursor()



for i in range(1,151):
    amount=random.random()*1000
    format_amount="{:.2f}".format(amount)
    # print(format_amount)
    cur.execute(f"update user_transactions set amount={format_amount} where id={i};")

cur.close()
conn.commit()

# to=[]
# from_=[]
# for i in all:
#     to.append(i[0])
#     from_.append(i[1])
# to=set(to)
# from_=set(from_)
# print( len(list(to)), len(list(from_)))