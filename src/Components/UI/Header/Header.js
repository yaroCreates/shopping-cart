import React from "react"
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function Header(props) {
    const {countCartItems} = props
    return(
        <header className='header'>
            <div>
                <h1>
                    <Link to='/shopping-cart/' className='logo'>
                        JerseyStore
                    </Link>
                </h1>
            </div>

            
            <div className='header-links'>
                <ul>
                    <li>
                        <Link to='/shopping-cart/'>Home</Link>
                    </li>
            
                
                    <li>
                        <Link to='/shopping-cart/signup'>Signup</Link>
                    </li>
                
                
                    <li>
                        <Link className='badge-parent' to='/shopping-cart/cart'>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            {countCartItems? (<button className='badge'>{countCartItems}</button>) :('')}
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header