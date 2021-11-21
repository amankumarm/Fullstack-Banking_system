import React from 'react'
import axios from 'axios'
import Cust_micro  from '../micro/input_grp'
import {BACKEND_URL} from  "../../pages/constants"
function Cust_Personal_Details() {
    const [cust_info, setcust_info] = React.useState([])
    const [attr, setattr] = React.useState(["Name","Age","Account No","Customer Id","address","Account Balance","adhaarNo","Branch Id","Account Status","key_accountType","dup_accountType","Account_Type"])
    const [token, settoken] = React.useState(null)
    const [access, setaccess] = React.useState(null)
    React.useEffect(() => {
        settoken(localStorage.getItem("token"))
        setaccess(localStorage.getItem("access"))
        if (token!==null) {
            axios.get(`${BACKEND_URL}/customerDetails/${token}`)
        .then(res=>{                //update state
            console.log(res)
            var data=res.data.op
            setcust_info(data)
        })
        .catch(err=>console.log(err))
        }
    }, [token])
    if (cust_info.length===0) {
        return <>Loading</>
    } else {
    return (
        <div className="cust-details test">
            <h2>User Details</h2>
            {
                cust_info.map((item,index)=>(
                    <Cust_micro key={index} objkey={attr[index]} value={item}  /> 
                ))
            }

        </div>
    )
        }
}

export default Cust_Personal_Details
