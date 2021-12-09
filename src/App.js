import React, { useState } from 'react'
import data from './Components/Back/Data/Data'
import Header from './Components/UI/Header/Header'
import RouteSwitch from './Components/UI/Routes/RouteSwitch'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const { productItems } = data
  console.log(productItems)

  const [cartItems, setCartItems] = useState([])


  function handleAddProduct(product) {
    const ProductExist = cartItems.find((item) => item.id === product.id)
    if(ProductExist){
      setCartItems(
        cartItems.map((item) =>
        item.id === product.id
        ?{ ...ProductExist, quantity: ProductExist.quantity + 1}
        :item
        
      )
    )
    } else {
      setCartItems([...cartItems, {...product, quantity : 1}])
    }
  }

  function handleRemoveProduct(product) {
    const productExist = cartItems.find((item) => item.id === product.id)
    if(productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1}
              : item)
      )
    }
  }

  function handleClearCart() {
    setCartItems([])
  }

  return (
    <Router>
      <Header countCartItems={cartItems.length}/>
      <RouteSwitch
        productItems={productItems}
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleClearCart={handleClearCart}
      />

    </Router>
  )
}

export default App
