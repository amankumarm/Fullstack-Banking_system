import axios from 'axios'
import React from 'react'
import Cust_Navbar from "../custNavbar"
import Cust_Transactions from './Cust_Transactions'
import Cust_Actions from './Cust_Actions'
import Cust_Personal_Details from './Cust_Perssonal_Details'
import {BACKEND_URL} from '../../pages/constants'
function CustomerDetails() {
    const [token, settoken] = React.useState(null)
    const [access, setaccess] = React.useState(null)
    const [signedinas,setsignedinas]=React.useState(null)
    React.useEffect(() => {
        settoken(localStorage.getItem("token"))
        setaccess(localStorage.getItem("access"))
    }, [token,access])


    if (token===null || access===null) {
        return(<>
        Please Login <a href="/">here</a></>) //center this
    } else {      
        
        return (<>
                <Cust_Navbar user={access} token={token}/>
                    <div className="cust-home">
                        <Cust_Personal_Details />
                        <div className="cust-inner-right test">
                        <Cust_Transactions/>
                        <Cust_Actions token={token}/> 
                        </div>
                    </div>
                </>
    )
}

}
export const getServerSideProps=({params,req,res})=>{
console.log(params,req,res)
return{
    params:[]
}
}

export default CustomerDetails

