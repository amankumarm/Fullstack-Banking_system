import React from 'react'
import Cust_Navbar from "../custNavbar"
import Cust_Transactions from './Cust_Transactions'
import Cust_Actions from './Cust_Actions'
import Cust_Personal_Details from './Cust_Perssonal_Details'
function CustomerDetails() {
    const [token, settoken] = React.useState(null)
    const [access, setaccess] = React.useState(null)
    React.useEffect(() => {
        settoken(localStorage.getItem("token"))
        setaccess(localStorage.getItem("access"))
    }, [])


    if (token===null || access===null) {
        return(<>
        Please Login <a href="/">herh</a></>)
    } else {      
        //api request here
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

}
export const getServerSideProps=({params,req,res})=>{
console.log(params,req,res)
return{
    params:[]
}
}

export default CustomerDetails

