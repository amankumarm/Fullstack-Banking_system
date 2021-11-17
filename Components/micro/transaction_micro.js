import React from 'react'

function Transaction_micro({to, amount}) {
    return (
        <div className="trans_micro">
            <p>Rs. {amount} sent to {to} </p>
        </div>
    )
}

export default Transaction_micro
