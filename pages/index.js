import { useState,useEffect } from "react"
import axios from "axios"
import { BACKEND_URL } from "./constants"
import Router from 'next/router'

const Login=()=>{
   const [username,setusername]=useState("")
   const [password,setpassword]=useState("")
   const [access, setaccess] = useState("")
   
   useEffect(()=>{
      const access=localStorage.getItem("access")
      const token=localStorage.getItem("token")
      if(token!==null){
         Router.push(`/${access}`)
      }
   },[])
   
   
   const handleChange=(event,setter)=>{
      setter(event.target.value)
   }
   const handleSubmit=()=>{
      axios.post(`/api/login`,{username,password})
      .then(res=>{
         if (res.status===200) {
            const {data}=res
            console.log("data",data)
            localStorage.setItem("token",data.token)
            localStorage.setItem("access",data.access)
            Router.push(`/${data.access}`)
         }
         else{
            alert("wrong password")
         }

      })
      .catch(err=>{console.log(err)})
   }
   return (
      <>
      <label htmlFor="username">Username</label><br/>
      <input type="text" id="username" onChange={e=>handleChange(e,setusername)}/><br/>
      <label htmlFor="pass">Password</label><br/>
      <input type="password" id="pass" onChange={e=>handleChange(e,setpassword)}/>
      <br/>
      <button onClick={handleSubmit}>Submit</button>
      </>
   )
}
export default Login
