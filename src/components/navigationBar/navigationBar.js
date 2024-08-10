import React from "react";
import { Link } from "react-router-dom";
import "./navigationBar.css";

function NavigationBar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/featured">Featured</Link>
                </li>
                <li>
                    <Link to="/hamburgers">Hamburgers</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;