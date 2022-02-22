import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        // <nav>
        //     <ul>
        //         <li>
        //             <Link to="/">Home</Link>  
        //         </li>
        //         <li>
        //             <Link to="./about">About</Link>
        //         </li>
        //         <li>
        //             <Link to="./login">Login</Link>
        //         </li>
        //     </ul>
        // </nav>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink end to="/" className={({isActive})=>"nav-link "+(isActive?"active":"")} >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink end to="/about" className={({ isActive }) => "nav-link " + (isActive ? "active" : "")} >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink end to="/login" className={({ isActive }) => "nav-link " + (isActive ? "active" : "")} >Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar