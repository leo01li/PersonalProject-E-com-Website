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
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/Favorites" onClick={() => setOpen(false)}>Favorites</Link>
        <Link to="/Cart" onClick={() => setOpen(false)}>Cart</Link>
        <Link to="/SignIn" onClick={() => setOpen(false)}>Sign In</Link>
    </div>}
    </div>
}

export default HamburgerMenu;