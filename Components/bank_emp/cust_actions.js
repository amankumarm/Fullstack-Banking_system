import React from 'react'
import {Navbar,Container,Nav,Button,Modal} from 'react-bootstrap'
import axios from 'axios'
import {BACKEND_URL} from "../../pages/constants"
function BE_CustActions({token}) {
    
    const [AdduserModal, setAdduserModal] = React.useState(false);
    const [GenloanModal,setGenloanModal] = React.useState(false);
    const [user_details,setuser_details]=React.useState({})
    const [loan_details,setloan_details]=React.useState({})

    const Add_handleClose = () => {
        setAdduserModal(false)
        setuser_details({})
    };
    const Add_handleShow = () => setAdduserModal(true);
      
    const Gen_handleClose = () => setGenloanModal(false);
    const Gen_handleShow = () => setGenloanModal(true);


    const setuserdetails=(e)=> {
        const _key=e.target.name
        const _value=e.target.value 
        setuser_details({...user_details,[e.target.name]:e.target.value})
    }

    const Add_newuser=()=>{
        axios.post(`${BACKEND_URL}/b/addNewUser`,{user_details})
        .then(res=>{console.log(res)})
        .catch(err=>console.log(err))
        console.log(user_details)
    }
    

    const setloandetails=(e)=> {
        const _key=e.target.name
        const _value=e.target.value 
        setloan_details({...loan_details,[e.target.name]:e.target.value})
    }

    const Gen_handleSubmit=()=>{
        // axios.post(`${BACKEND_URL}/b/addNewUser`,{user_details})
        // .then(res=>{console.log(res)})
        // .catch(err=>console.log(err))
        console.log(JSON.stringify(loan_details))
    }
    

    return (
        <Container>
            <Navbar >
                <Container>
                <Navbar.Brand >Customer Details</Navbar.Brand>
                <Nav className="be-actions-container" >
                    <Button className="Actions-Button" variant="outline-success"  onClick={Add_handleShow}>
                        Add User
                    </Button>

                    <Modal show={AdduserModal} onHide={Add_handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Add User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label htmlFor="Name">Customer Name</label>
                            <input className="ip-grp" id="Name" name="Name" type="text" onChange={e=>setuserdetails(e)}  /><br/>

                            <label htmlFor="Age">Age</label>
                            <input className="ip-grp" id="Age" name="Age" type="number" onChange={e=>setuserdetails(e)} /><br/>

                            <label htmlFor="AdhaarNo">Adhaar No.</label>
                            <input className="ip-grp" id="AdhaarNo" name="AdhaarNo" type="text" onChange={e=>setuserdetails(e)} /><br/>

                            <label htmlFor="Address">Address.</label>
                            <input className="ip-grp" id="Address" name="Address" type="text" onChange={e=>setuserdetails(e)} /><br/>

                            <label htmlFor="Acctype">Account Type</label><br/>
                            <input className="ip-grp" id="Address" name="acctype" value="1" type="radio" onChange={e=>setuserdetails(e)} /> Savings<br/>
                            <input className="ip-grp" id="Address" name="acctype" value="3"  type="radio" onChange={e=>setuserdetails(e)} /> F.D<br/>
                            <input className="ip-grp" id="Address" name="acctype" value="2" type="radio" onChange={e=>setuserdetails(e)} />Current<br/>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={Add_handleClose} >
                            Close
                        </Button>
                        <Button variant="primary" onClick={Add_newuser}>
                            ADD
                        </Button>
                        </Modal.Footer>
                    </Modal>



                    <Button className="Actions-Button" variant="outline-success" onClick={Gen_handleShow}>
                        Generate User Loan
                    </Button>

                    
                    <Modal show={GenloanModal} onHide={Gen_handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Allot Loan</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label htmlFor="CAN">Customer Account No.</label>
                            <input className="ip-grp" type="text" id="CAN" name="accno"  onChange={e=>setloandetails(e)}/><br/>

                            <label htmlFor="amt" >Amount</label>
                            <input className="ip-grp" max={150} type="text" id="amt"  name="Amount" onChange={e=>setloandetails(e)}/><br/>
                            
                            <label htmlFor="int">Interest</label>
                            <input className="ip-grp" type="text" id="int" name="int" onChange={e=>setloandetails(e)}/><br/>

                            <label htmlFor="dur">Duration</label>
                            <input className="ip-grp" type="text" id="dur" name="Dur" onChange={e=>setloandetails(e)}/><br/>

                            <label htmlFor="lt">Loan Type</label><br/>

                            <input className="ip-grp" id="Address" name="loantype" value="Personal" type="radio" onChange={e=>setloandetails(e)} /> Personal<br/>
                            <input className="ip-grp" id="Address" name="loantype" value="Home" type="radio" onChange={e=>setloandetails(e)} /> Home<br/>
                            <input className="ip-grp" id="Address" name="loantype" value="Education" type="radio" onChange={e=>setloandetails(e)} />Education<br/>
                            <input className="ip-grp" id="Address" name="loantype" value="Car"  type="radio" onChange={e=>setloandetails(e)} /> Car<br/>

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={Gen_handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={Gen_handleSubmit}>
                            Allot Loan
                        </Button>
                        </Modal.Footer>
                    </Modal>



                </Nav>
                </Container>
            </Navbar>
        </Container>


    )
}

export default BE_CustActions
