import React from 'react';
import { Link } from 'react-router-dom';
import './hamburgers.css';
import NavigationBar from '../../components/navigationBar/navigationBar';

function Hamburgers() {
    return (
        <div>
            <NavigationBar />
            <div className='hamburgersCSS'>
                test
            </div>
        </div>
    );
}

export default Hamburgers;