import React,{useState,useEffect} from 'react'
import { Navbar,Nav,Container,Button } from "react-bootstrap"
import {BACKEND_URL} from "../pages/constants"
import axios from "axios"
import Router from 'next/router'

function Cust_Navbar({token,user}) {
  const [username, setusername] = useState("loading...")
  useEffect(()=>{
    if(token!==null){
    axios.get(`${BACKEND_URL}/getusername/${user}/${token}`)
    .then(res=>{
      var _username=res.data.op[0]
      setusername(_username)
    })
    .catch(err=>console.error(err))
  }
  },[token])
  const handleLogout=(e)=>{
    localStorage.removeItem("token")
    localStorage.removeItem("access")
    Router.push('/')
  }
  return (
        <div>
              <Navbar>
  <Container>
    <Navbar.Brand href="">Bank of India</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a>{username}</a>
      </Navbar.Text>
      <Navbar.Text>
      <Button variant="outline-dark" onClick={handleLogout}>Logout</Button>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    )
}

export default Cust_Navbar
