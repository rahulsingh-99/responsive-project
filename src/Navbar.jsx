import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = ({ theme }) => {
    console.log(theme);
    return (
        <>
            <div className="container-fluid nav_bg" >
                <div className="row" >
                    <div className="col-10 mx-auto" >

                        <nav className={`navbar navbar-expand-lg ${theme !== 'light' ? "light" : "dark"}`} >
                            <div className="container-fluid ">
                                <NavLink className="navbar-brand" exact to="/"><h2>@Aimers</h2></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active"
                                                aria-current="page"
                                                exact
                                                activeClassName="menu_active"
                                                to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link"
                                                exact
                                                activeClassName="menu_active"
                                                to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link"
                                                exact
                                                activeClassName="menu_active"
                                                to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link"
                                                exact
                                                activeClassName="menu_active"
                                                to="/contact">Contact Us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link"
                                                exact
                                                activeClassName="menu_active"
                                                to="/login">Login</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;