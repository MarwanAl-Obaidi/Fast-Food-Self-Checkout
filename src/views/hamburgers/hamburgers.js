import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hamburgers.css';
import NavigationBar from '../../components/navigationBar/navigationBar';
import IngredientFilter from '../../components/ingredientFilter/ingredientFilter';

function Hamburgers() {
    const [hamburgers, setHamburgers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedIngredient, setSelectedIngredient] = useState('All');
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const fetchHamburgers = async () => {
            try {
                const response = await fetch('https://fast-food-self-checkout-api.onrender.com/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setHamburgers(data);

                const uniqueIngredients = [...new Set(data.map(hamburger => hamburger.mainIngredient))];
                setIngredients(uniqueIngredients);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchHamburgers();
    }, []);

    const handleIngredientSelect = (ingredient) => {
        setSelectedIngredient(ingredient);
    };

    const filteredHamburgers = selectedIngredient === 'All'
        ? hamburgers
        : hamburgers.filter(hamburger => hamburger.mainIngredient === selectedIngredient);

    return (
        <div>
            <NavigationBar />
            <div className='hamburgersFetch'>
                {loading && <p>Loading hamburgers...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && (
                    <div>
                        <IngredientFilter
                            ingredients={ingredients}
                            selectedIngredient={selectedIngredient}
                            onIngredientSelect={handleIngredientSelect}
                        />
                        <div className="hamburger-list">
                            {filteredHamburgers.map((hamburger, index) => (
                                <div key={index} className="hamburger-item">
                                    <h3>{hamburger.name}</h3>
                                    <img src={hamburger.image} alt={hamburger.name} className="hamburger-image" />
                                    {/* <p>Main Ingredient: {hamburger.mainIngredient}</p> */}
                                    <p>Price: ${hamburger.price.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Hamburgers;
