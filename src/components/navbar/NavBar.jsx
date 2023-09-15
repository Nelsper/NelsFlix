import React from "react";
import './scss/styleNav.css'
import logo from "../../../public/images/logos/Logotipo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faClapperboard,faFilm } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";


const NavBar = () => {

    return(
        <>
            <header>
                <nav className="navbar">
                    <Link className="logo" to="/home"><img src={logo} alt="logotipo" /></Link>
                    <ul className="items">
                        <Link className="item" to="/home"><FontAwesomeIcon icon={faHouse} size="xs"/> Home</Link>
                        <Link className="item" to="/home"><FontAwesomeIcon icon={faClapperboard} size="xs"/> Movies</Link>
                        <Link className="item" to="/home"><FontAwesomeIcon icon={faFilm} size="xs"/> Series</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
};


export default NavBar;