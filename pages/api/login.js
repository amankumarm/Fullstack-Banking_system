import axios from 'axios'
import { BACKEND_URL } from '../constants'
export default function loginRoute(req,resp){
    //send api to flaks
    axios({method: 'get',url: `${BACKEND_URL}/loginDetails`})
    .then(res=>{
        console.log(res)
        resp.send(res)
    })
    .catch(err=>console.error(err))
}