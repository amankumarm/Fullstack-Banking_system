import React from 'react'

function Transaction_Details() {
    const [token, settoken] = useState(null)
    const [access, setaccess] = useState(null)
    useEffect(() => {
        settoken(localStorage.getItem("token"))
        setaccess(localStorage.getItem("access"))
    }, [token,access])
    return (
        <div>
        <Cust_Navbar user={access} token={token} />
            
        </div>
    )
}

export default Transaction_Details
