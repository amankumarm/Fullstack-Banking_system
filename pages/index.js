import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "./constants"
const Login=()=>{
   const [userId,setuserId]=useState("")
   const [password,setpassword]=useState("")
   const handleChange=(event,setter)=>{
      setter(event.target.value)
   }
   const handleSubmit=()=>{
      console.log(password,userId)
      axios.get(`${BACKEND_URL}/loginDetails`)
      .then(res=>{
         console.log(res)

         axios.get(`${BACKEND_URL}/getroute`)
         .then(res=>{
            console.log(res)
         })
         .catch(err=>{console.log(err)})
      
      })
      .catch(err=>{console.log(err)})
   }
   return (
      <>
      <label htmlFor="userid">Userid</label><br/>
      <input type="text" id="userid" onChange={e=>handleChange(e,setuserId)}/><br/>
      <label htmlFor="pass">Password</label><br/>
      <input type="pass" id="pass" onChange={e=>handleChange(e,setpassword)}/>
      <br/>
      <button onClick={handleSubmit}>Submit</button>
      </>
   )
}
export default Login
