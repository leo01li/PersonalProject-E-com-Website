import { useState } from "react";
import Hamburger from "hamburger-react";
import "./Hamburger.css"
import { Link } from 'react-router-dom';

function HamburgerMenu() {
    const [open, setOpen] = useState(false);
    return <div>
        <Hamburger
            size={24}
            toggled={open}
            toggle={setOpen}
        />
        {open && <div className="hamburger-menu">
        <Hamburger
            size={24}
            toggled={open}
            toggle={setOpen}
        />
        <Link to='/Favorites'>Favorites</Link>
        <Link to='/Cart'>Cart</Link>
        <Link to='/SignIn'>Sign In</Link>
    </div>}
    </div>
}

export default HamburgerMenu;