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
    const productExist = cartItems.find((item) => item.id === product.id)
    if(productExist){
      setCartItems(
        cartItems.map((item) =>
        item.id === product.id
        ?{ ...productExist, quantity: productExist + 1}
        :item
        
      )
    )
    } else {
      setCartItems([...cartItems, {...product, quantity : 1}])
    }
  }

  return (
    <Router>
      <Header />
      <RouteSwitch productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct}/>
    </Router>
  )
}

export default App
