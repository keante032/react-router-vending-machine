import { BrowserRouter, Route } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import CandyBar from "./CandyBar";
import Chips from "./Chips";
import Soda from "./Soda";

function App() {
    return (
        <BrowserRouter>
                <Route path="/" exact>
                    <VendingMachine />
                </Route>
                <Route path="/candybar" exact>
                    <CandyBar />
                </Route>
                <Route path="/chips" exact>
                    <Chips />
                </Route>
                <Route path="/soda" exact>
                    <Soda />
                </Route>
        </BrowserRouter>
    );
}

export default App;
