import React from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios'
import { BACKEND_URL } from '../../pages/constants'
const BE_Custdetails = ({token}) => {
    const [custDetails, setcustDetails] = React.useState([])
    React.useEffect(() => {
    axios.post(`${BACKEND_URL}/b/getCustomerDetails`,{token})
    .then(res=>setcustDetails(res.data.op))
    .catch(err=>console.log(err))
}, [token])
    return (
    <>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>Name</th>
      <th>Age</th>
      <th>Account No</th>
      <th>Address</th>
      <th>Balance</th>
      <th>Aadhaar No</th>
      <th>Account Status</th>
      <th>Account type</th>
    </tr>
  </thead>
  <tbody>
        {
            custDetails.map((item,index)=>{
                return(
                    <tr>
                        <td>{index}</td>
                        {
                            item.map((inner_item)=>(
                                <td>{inner_item}</td>
                            ))
                        }
                    </tr>
                )


            })
        }
  </tbody>
</Table>
    </>
  )
}

export default BE_Custdetails
