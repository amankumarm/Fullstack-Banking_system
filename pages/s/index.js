import { Navbar,Nav,Container } from "react-bootstrap"
import style from "../../styles/s.module.css"
const superUser=()=>{
  const [pageValue, setpageValue] = useState(initialState)
  const handlePagination=(e)=>{

  }  
  return (
        <div >
              <Navbar>
                <Container>
                  <Navbar.Brand href="">Bank of India</Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                  <Nav>
                  <Nav.Link href="/s/bankDetails">Banks</Nav.Link>
                  <Nav.Link href="/s/customers">Customers</Nav.Link>
                  </Nav>
                    <Navbar.Text>
                      Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>

                  </Navbar.Collapse>
                </Container>
              </Navbar>

        </div>
    )
}

export default superUser