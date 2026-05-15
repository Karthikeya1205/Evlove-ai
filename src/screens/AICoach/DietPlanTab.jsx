// src/screens/AICoach/DietPlanTab.jsx
import React from 'react';

const diet = [
    {
        letter: 'B', title: 'Breakfast', description: 'Morning Oats: Oats with berries, almonds, and a scoop of protein powder.'
    },
    {
        letter: 'L', title: 'Lunch', description: 'Grilled Chicken & Greens: Lean grilled chicken with a fresh salad of mixed greens.'
    }
]

const DietPlanTab = () => {
    return (
        <div className="diet-plan-container">
            {diet.map((meal, index) => (
                 <div key={index} className="meal-card">
                    <div className="meal-letter">{meal.letter}</div>
                    <div>
                        <h4 className="meal-title">{meal.title}</h4>
                        <p className="meal-description">{meal.description}</p>
                    </div>
                </div>
            ))}
            <button className="generate-button">Generate New Diet Plan ✨</button>
        </div>
    );
};

export default DietPlanTab;