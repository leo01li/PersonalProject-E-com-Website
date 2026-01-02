import React, { useState, useContext } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
// import { CartContext } from './Features/ContextProvider';
import "./Navbar.css"

function Navbar() {
    // const {cart} = useContext(CartContext)

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
    <>
    <nav>
        <Link to='/'>
            <div className="fill">
                <h1 className="fill-name">eCom</h1>
             </div>
        </Link>

        <div className="nav-container">
            {/* <div className='search-bar'> */}
                <input
                    className='search'
                    type='text'
                    placeholder='Search...'

                />
            {/* </div> */}
            <FaSearch className='search-icon'/>
        </div>

        <div className="user-profile">

        <Link to='/Favorites'>
                <FaHeart className="heart-icon" onClick={handleClick}/>
            </Link>
    
        <Link to='/Cart'>
                <FaShoppingCart className="cart-icon" onClick={handleClick}/>
            </Link>
     
            <Link to='/SignIn'>
                <FaUserCircle className="profile-icon" onClick={handleClick}/>
            </Link>

        </div>

    </nav>
    </>
  )
}

export default Navbar