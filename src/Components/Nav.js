import React, {useState} from 'react'
import {BiMenu} from 'react-icons/bi'

const Nav =()=> {
    const [menuStatus, setMenuStatus] = useState(false);
    return (
        <div className="nav">
            <BiMenu className="menuIcon" onClick={() => setMenuStatus(!menuStatus)}/>
            <ul className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Skills
                </li>
                <li>
                    Experiences
                </li>
                <li>
                    Portfolio
                </li>
                <li>
                    Pricing
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </div>
    );
}

export default Nav;