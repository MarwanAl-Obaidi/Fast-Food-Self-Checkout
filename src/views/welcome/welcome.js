import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

function Welcome() {
    return (
        <div className='welcomeCSS'>
            <h1>Welcome to Epic Burger</h1>
            <p>Home of the best burgers in town!</p>
            <Link to='/featured'>
                <button className='startButton'>Get started!</button>
            </Link>
        </div>
    );
}

export default Welcome;