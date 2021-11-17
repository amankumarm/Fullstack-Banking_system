import React from 'react'
import { Navbar,Nav,Container } from "react-bootstrap"
function Cust_Navbar({signedin}) {
    return (
        <div>
              <Navbar>
  <Container>
    <Navbar.Brand href="">Bank of India</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>

    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    )
}

export default Cust_Navbar
