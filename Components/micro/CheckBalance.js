import {useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import axios from "axios"
import {BACKEND_URL} from "../../pages/constants"
function Checkbalance({token}) {
    const [show, setShow] = useState(false);
  const [Amount, setAmount] = useState("Loading")
    const handleClose = () => setShow(false);
    const handleShow = () => {
      axios.get(`${BACKEND_URL}/getAccountBalance/${token}`)
      .then(res=>{
        setAmount(res.data.op[0])
      })
      .catch(err=>console.log(err))
      setShow(true)
      
    };
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Check Balance
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Account Balanace</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              Balanace - Rs: {Amount}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Checkbalance