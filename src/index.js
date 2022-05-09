import ReactDom from "react-dom"

import Navbar from "./componentes/Navbar.js"
import Corpo from "./componentes/Corpo.js"
import FundoMobile from "./componentes/FundoMobile.js"

function App () {
    return (
        <div>
            <Navbar />
            <Corpo />
            <FundoMobile />
        </div>
    )
}



ReactDom.render(App(), document.querySelector(".root"))