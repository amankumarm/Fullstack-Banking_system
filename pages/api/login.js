import axios from 'axios'
import { serialize } from 'cookie'
import { BACKEND_URL } from '../constants'
export default function login(req,res){
    
    //send api to flaks
    const {username,password}=req.body
    axios.post(`${BACKEND_URL}/login`,{username,password})
    .then(api_res=>{
        console.log(api_res)
        var token=api_res.data.op[0]
        // console.log(token.subString(2))
            res.setHeader('Set-Cookie', serialize('token', token.substring(2)),{path:'/'})
            res.status(200).json(JSON.stringify({
                "token":token.substring(2),
                "access":token[0].toLowerCase(),
                "message":"success"
            }))
    })
    .catch(api_err=>console.error(api_err))
    
    
}
