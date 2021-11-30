import React from 'react'
import data from './Components/Back/Data/Data'
import Header from './Components/UI/Header/Header'
import RouteSwitch from './Components/UI/Routes/RouteSwitch'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const { productItems } = data
  console.log(productItems)

  return (
    <Router>
      <Header />
      <RouteSwitch productItems={productItems}/>
    </Router>
  )
}

export default App
