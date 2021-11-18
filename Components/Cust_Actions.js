import React from 'react'
import Checkbalance from './micro/CheckBalance';
import SendMoneyAction from './micro/send_money';
function Cust_Actions() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () =>{ 
        //api to get the balance
        setShow(true)
    };
    

    return (<>
            <h2 style={{paddingLeft:1+"em"}}>Actions</h2>
                <div className="cust-Actions test">
                    <Checkbalance  />    
                <SendMoneyAction  />
            
        </div>
        </>
    )
}

export default Cust_Actions
