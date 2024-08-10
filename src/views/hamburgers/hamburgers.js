import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hamburgers.css';
import NavigationBar from '../../components/navigationBar/navigationBar';

function Hamburgers() {
    const [hamburgers, setHamburgers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHamburgers = async () => {
            try {
                const response = await fetch('https://fast-food-self-checkout-api.onrender.com/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setHamburgers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchHamburgers();
    }, []);

    return (
        <div>
            <NavigationBar />
            <div className='hamburgersFetch'>
                {loading && <p>Loading hamburgers...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && (
                    <div className="hamburger-list">
                        {hamburgers.map((hamburger, index) => (
                            <div key={index} className="hamburger-item">
                                <h3>{hamburger.name}</h3>
                                <img src={hamburger.image} alt={hamburger.name} className="hamburger-image" />
                                <p>Price: ${hamburger.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Hamburgers;
