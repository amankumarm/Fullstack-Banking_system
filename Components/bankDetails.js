import React,{useState} from 'react'
import axios from 'axios'
import {BACKEND_URL} from "../pages/constants"
import { Navbar,Nav,Container,Button } from "react-bootstrap"
import MyVerticallyCenteredModal from './Modal'
function BankDetails() {
    const [bankdetails, setbankdetails] = useState([{name:"Kathreguppe",Employee:`12 (People)`, Customers:`100`},{name:"Majetsic",Employee:`12 (People)`, Customers:`100`},{name:"Banashankri",Employee:`12 (People)`, Customers:`100`},{name:"M.G road",Employee:`12 (People)`, Customers:`100`}])
    const [modalShow, setModalShow] = React.useState(false);
    // useEffect(() => {
    //     axios.get(BACKEND_URL+"")
    //     .then(res=>setbankdetails(res.dat))                               //get details of all the banks
    //     .catch(Err=>console.log(err))
    // },
    //  [])
    return (
        <div className="bankDetails">
        <Container>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            <Navbar bg="light" className="Details-Nav">
                    <Navbar.Brand href="#home">Bank Details</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Button variant="primary" onClick={()=>setModalShow(true)}>+ADD</Button>
                    </Nav>
            </Navbar>
        </Container>
        {
            bankdetails.map((item,index)=>{
                if (index===0) {
                   return(<div className="bankListParent">
                <div>Branch Name</div>
                <div>Number of Employee(s)</div>
                <div>Number of Customers </div>
            </div>)
                }
                else{
                return (
                <div className="bankListParent">
                <div>{item.name}</div>
                <div>{item.Employee}</div>
                <div>{item.Customers}</div>
                </div>
                )}
        })
    }
        </div>
    )
}

export default BankDetails
