import React from 'react'
import Cust_Navbar from "./custNavbar"
import Cust_Transactions from './Cust_Transactions'
import Cust_Actions from './Cust_Actions'
import Cust_Personal_Details from './Cust_Perssonal_Details'
function CustomerDetails() {
    return (<>
        <Cust_Navbar />
        <div className="cust-home">
            <Cust_Personal_Details />
            <div className="cust-inner-right test">
            <Cust_Transactions/>
            <Cust_Actions /> 
            </div>
        </div>
        </>
    )
}

export default CustomerDetails
