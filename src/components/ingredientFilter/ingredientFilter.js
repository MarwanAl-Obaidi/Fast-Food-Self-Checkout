import React from 'react';
import './ingredientFilter.css';

function IngredientFilter({ ingredients, selectedIngredient, onIngredientSelect }) {
    return (
        <div className="filter-container">
            <button
                className={`filter-button ${selectedIngredient === 'All' ? 'active' : ''}`}
                onClick={() => onIngredientSelect('All')}
            >
                All
            </button>
            {ingredients.map((ingredient, index) => (
                <button
                    key={index}
                    className={`filter-button ${selectedIngredient === ingredient ? 'active' : ''}`}
                    onClick={() => onIngredientSelect(ingredient)}
                >
                    {ingredient}
                </button>
            ))}
        </div>
    );
}

export default IngredientFilter;
