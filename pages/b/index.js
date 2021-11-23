import React,{useState,useEffect} from 'react'
import Cust_Navbar from '../../Components/custNavbar'
import BE_CustActions from '../../Components/bank_emp/cust_actions'
import BE_Custdetails from '../../Components/bank_emp/be_custdetails'
import {Container} from 'react-bootstrap'

function Bank_Employee() {
    const [token, settoken] = useState(null)
    const [access, setaccess] = useState(null)
    useEffect(() => {
        settoken(localStorage.getItem("token"))
        setaccess(localStorage.getItem("access"))
    }, [token,access])
    return (
        <div>
        <Cust_Navbar user={access} token={token} />
        <Container>
            <br/>
            <BE_CustActions token={token} />
            <br/>
            <BE_Custdetails token={token}/>
        </Container>
        </div>
    )
}

export default Bank_Employee
