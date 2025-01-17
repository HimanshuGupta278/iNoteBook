import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    let loc = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>iNoteBook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${loc.pathname === "/" ? "active" : ""}`} aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${loc.pathname === "/about" ? "active" : ""}`} to='/about'>About</Link>
                        </li>
                    </ul>
                    {localStorage.getItem('token') === null ? <form className="d-flex mx-1" role="search">
                        <Link className="btn btn-primary" to='/login' role="button">Login</Link>
                        <Link to='/signin' className="btn btn-primary mx-1" role="button">Signin</Link>
                    </form> : <form className="d-flex mx-1" role="search">
                        <button className="btn btn-primary mx-1" role="button" onClick={() => { localStorage.removeItem('token') }}>Logout</button>
                    </form> }

                </div>
            </div>
        </nav>
    )
}

export default Navbar