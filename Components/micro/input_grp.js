import {InputGroup,FormControl} from 'react-bootstrap'
function Cust_micro({objkey,value}) {
    if (objkey==="Customer Id" || objkey==="key_accountType" ||objkey==="dup_accountType" || objkey ==="Account Balance") {
        return null
    } else {
        
    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">{objkey}</InputGroup.Text>
                    <FormControl
                          aria-label="Default"
                          aria-describedby="inputGroup-sizing-default"
                          disabled
                          value={value}
                    />
            </InputGroup>
        </div>
    )}
}

export default Cust_micro
