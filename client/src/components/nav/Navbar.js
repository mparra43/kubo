import React from 'react'
import {Link, NavLink} from "react-router-dom";
import {FcFilmReel} from 'react-icons/fc';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                <FcFilmReel className="log-bol"/>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/"
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/Novedades"
                    >
                        Novedades
                    </NavLink>


                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/Search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
