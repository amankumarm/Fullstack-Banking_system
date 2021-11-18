import axios from 'axios'
import { serialize } from 'cookie'
import { BACKEND_URL } from '../constants'

export default function login(req,res){
    
    //send api to flaks
    
    const userObj={
        username:"aman",
        password:"aman",
        id:"c1de58f9-3a46-45fa-b4f6-6fdb280c9414"
    }
    const {username,password}=req.body
    console.log(username,password)
    if(username===userObj.username && password===userObj.password){
        res.setHeader('Set-Cookie', serialize('token', userObj.id),{path:'/'})
        res.status(200).json(JSON.stringify({
            "token":userObj.id,
            "access":userObj.id[0],
            "message":"success"
        }))
    }
    else{
        res.status(404)
    }

    
}
