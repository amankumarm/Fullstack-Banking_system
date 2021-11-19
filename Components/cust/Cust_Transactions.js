import Transaction_micro from "../micro/transaction_micro"
import data from "../micro/transactions.json"
function Cust_Transactions() {
    const [transactions, settransactions] = useState([])
    useEffect(() => {
        //api request here
        
    }, [])
    return (

        <div className="custTransactionDetails test">
            <h2>Transactions</h2>
            {
                data.map((item,index)=>(
                    <Transaction_micro to={item.to} amount={item.Amount}  key={index}/>
                ))
            }
        </div>
    )
}

export default Cust_Transactions
