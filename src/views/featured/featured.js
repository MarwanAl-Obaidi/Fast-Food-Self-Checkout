import React from "react";
import { Link } from "react-router-dom";
import "./featured.css";
import NavigationBar from "../../components/navigationBar/navigationBar";

function Featured() {
    return (
        <div>
            <NavigationBar />
            <div className="featuredCSS">
                <h1>Featured</h1>
            </div>
        </div>
    );
}

export default Featured;