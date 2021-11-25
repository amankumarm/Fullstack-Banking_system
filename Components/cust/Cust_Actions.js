import React from 'react'
import Checkbalance from '../micro/CheckBalance';
import SendMoneyAction from '../micro/send_money';
function Cust_Actions({token}) {
    return (<>
            <h2 style={{paddingLeft:1+"em"}}>Actions</h2>
                <div className="cust-Actions test">
                <Checkbalance  token={token}/>    
                <SendMoneyAction  token={token}/>
            
        </div>
        </>
    )
}

export default Cust_Actions
