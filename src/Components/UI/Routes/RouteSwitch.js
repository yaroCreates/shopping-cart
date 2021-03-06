import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from "../Products/Products"
import Signup from "../Signup/Signup"
import Cart from "../Cart/Cart"

function RouteSwitch(props) {
    const { productItems, cartItems, handleAddProduct, handleRemoveProduct, handleClearCart} = props
    return (
        <div>
            



                {/* <Route path='/' exact render={props => (
                        <React.Fragment>
                            <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
                        </React.Fragment>
                    )} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/cart' render={props => (
                        <React.Fragment>
                            <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} />
                        </React.Fragment>
                    )}/> */}
                <Switch>
                    <Route path="/shopping-cart/" exact>
                        <Products productItems={productItems} handleAddProduct={handleAddProduct} />
                    </Route>
                    <Route path='/shopping-cart/signup'>
                        <Signup />
                    </Route>
                    <Route path='/shopping-cart/cart'>
                        <Cart
                            cartItems={cartItems}
                            handleAddProduct={handleAddProduct}
                            handleRemoveProduct={handleRemoveProduct}
                            handleClearCart={handleClearCart}
                            countCartItems={cartItems.length}
                            
                        />
                    </Route>
                </Switch>



            


        </div>

    )
}


export default RouteSwitch