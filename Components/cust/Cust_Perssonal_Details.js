import React from 'react'
import Cust_micro  from '../micro/input_grp'
function Cust_Personal_Details() {
    const [state, setstate] = React.useState([{name:"Aman"},{branchId:"21"},{address:"Raichur"},{email:"Amankumarm441@gmail.com"},{adhaarNo:"6508-3803-4767"},{accountType:"Savings"}])
    useEffect(() => {
        axios.get(`${BACKEND_URL}/customerDetails/${token}`)
        .then(res=>{                //update state
            console.log(res)
        })
        .catch(err=>console.log(err))
    }, [])
    return (
        <div className="cust-details test">
            <h2>User Details</h2>
            {
                state.map((item,index)=>(
                    <Cust_micro key={index} objkey={Object.keys(item)[0]} value={Object.values(item)[0]}  /> 
                ))
            }

        </div>
    )
}

export default Cust_Personal_Details
