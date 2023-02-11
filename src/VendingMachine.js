import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <div>
            <h1>This is a vending machine. Please choose one of the available snacks.</h1>
            <h1><Link to="/candybar">CANDY BAR</Link></h1>
            <h1><Link to="/chips">CHIPS</Link></h1>
            <h1><Link to="/soda">SODA</Link></h1>
        </div>
    );
}

export default VendingMachine;