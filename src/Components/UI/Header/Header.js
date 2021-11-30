import React from "react"
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function Header(){
    return(
        <header className='header'>
            <div>
                <h1>
                    <Link to='/' className='logo'>
                        JerseyStore
                    </Link>
                </h1>
            </div>
            <div className='header-links'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/cart'>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header