import {useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
function Checkbalance() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
      //api call
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
              Balanace - Rs: 12,000
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