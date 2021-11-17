import {useState} from 'react'
import { Navbar,Nav,Container } from "react-bootstrap"
import style from "../../styles/s.module.css"
import BankDetails from '../../Components/bankDetails'
import CustomerDetails from "../../Components/customersDetails"
const superUser=()=>{
  const [pageValue, setpageValue] = useState(-1)
  const handlePagination=(e)=>{
    setpageValue(e.target.getAttribute('value'))
  }   

  if (pageValue===-1) {
    return(
      < >
      <Navbar>
        <Container>
          <Navbar.Brand href="">Bank of India</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav>
          <Nav.Link  value={1} onClick={handlePagination}>Banks</Nav.Link>
          <Nav.Link  value={2} onClick={handlePagination}>Customers</Nav.Link>
          </Nav>
            <Navbar.Text>
             Welcome:<a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h2>This is Home</h2>
      </>
    )
  } else if(pageValue==1) {
  
  return (
        <div >
              <Navbar>
                <Container>
                  <Navbar.Brand href="">Bank of India</Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                  <Nav>
                  <Nav.Link  value={1} onClick={handlePagination}>Banks</Nav.Link>
                  <Nav.Link  value={2} onClick={handlePagination}>Customers</Nav.Link>
                  </Nav>
                    <Navbar.Text>
                     Welcome:<a href="#login">Mark Otto</a>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <BankDetails />
        </div>
    )
  }
else if(pageValue==2) {

return (
      <div >
            <Navbar>
              <Container>
                <Navbar.Brand href="">Bank of India</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav>
                <Nav.Link  value={1} onClick={handlePagination}>Banks</Nav.Link>
                <Nav.Link  value={2} onClick={handlePagination}>Customers</Nav.Link>
                </Nav>
                  <Navbar.Text>
                   Welcome:<a href="#login">Mark Otto</a>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <CustomerDetails />
      </div>
  )
}
}

export default superUser