import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from "../Products/Products"

function RouteSwitch(props) {
    const {productItems} = props
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Products productItems={productItems}/>} />
                </Routes>
            </Router>

        </div>

    )
}


export default RouteSwitch