import { NavLink } from "react-router-dom";

const Nav = ({links}) => {
    return (
        <nav className='nav'>
            <ul className='nav__menu'>
                <li className="nav__menu-item">
                    <NavLink 
                        to="/home"
                        className={({ isActive }) => 
                                    (isActive ? "active" : "not-active")
                                   }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about"
                        className={({ isActive }) => 
                                    (isActive ? "active" : "not-active")
                                   }
                    >About
                    </NavLink>
                </li>
            </ul> 
        </nav>
    )
}

export default Nav