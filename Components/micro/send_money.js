import React from 'react'
import {Button,Modal,FormControl,InputGroup} from 'react-bootstrap'

function SendMoneyAction() {
    const [sendMoneyModal, setsendMoneyModal] = React.useState(false)
    const [amount, setAmount] = React.useState(0)
    const [toAccountNumber, settoAccountNumber] = React.useState(0)
    
    const sendMoneyModalClose = () => setsendMoneyModal(false);
    const sendMoneyModalShow = () =>{setsendMoneyModal(true)};
    const sendMoneyAction=()=>{
        //api call here
        console.log(toAccountNumber,amount)
        setsendMoneyModal(false)
    }
    return (
        <div>
          <>
          <Button variant="primary" onClick={sendMoneyModalShow}>Send Money</Button>

            <Modal show={sendMoneyModal} onHide={sendMoneyModalClose} >
                <Modal.Header closeButton>
                <Modal.Title>Send Money</Modal.Title>
                </Modal.Header>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Rs</InputGroup.Text>
                    <FormControl onChange={(e)=>setAmount(e.target.value)} className="sendMoneyModal" aria-label="Amount (to the nearest Rupee)"  type="number" step="1"/>
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text>To</InputGroup.Text>
                    <FormControl onChange={(e)=>settoAccountNumber(e.target.value)} className="sendMoneyModal" aria-label="Amount (to the nearest Rupee)"  palceholder="Account Number"step="1"/>
                    
                </InputGroup>
                <Modal.Footer>
                <Button variant="secondary" onClick={sendMoneyModalClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={sendMoneyAction}>
                    Send Money
                </Button>
                </Modal.Footer>
            </Modal>   
            </>
        </div>
    )
}

export default SendMoneyAction
