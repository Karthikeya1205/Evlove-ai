import React from 'react';

const workouts = {
  week1: [
    { name: 'Seated Triceps', time: '60s' },
    { name: 'Russian Twists', time: '60s' },
    { name: 'Crunches', time: '40s' },
    { name: 'Bent Over Rows', time: '60s' },
  ],
  week2: [
    { name: 'Push-ups', time: '60s' },
    { name: 'Arm Circles', time: '60s' },
    { name: 'Side Plank', time: '40s' },
    { name: 'Dumbbell Curls', time: '60s' },
  ],
};

const WorkoutPlanScreen = () => (
  <div className="screen" id="workout-screen">
    <header className="page-header">
      <h2>Workouts</h2>
      <div className="header-actions">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </header>

    <div className="focus-card">
      <div>
        <p className="focus-label">Focus Area</p>
        <h3 className="focus-title">Toned Arms</h3>
        <p className="focus-details">Duration: 10 - 15 min</p>
        <p className="focus-details">Calories: 300 kcal/day</p>
      </div>
      <div style={{ fontSize: '3rem' }}>💪</div>
    </div>

    <h3 className="plan-title">Plan Preview</h3>

    {Object.entries(workouts).map(([weekKey, exercises], wi) => (
      <div className="week-plan" key={weekKey}>
        <h4>Week {wi + 1}</h4>
        <p>{wi === 0 ? 'Full Body Activation' : 'Toned Arms'}</p>
        <div className="exercise-grid">
          {exercises.map((ex, i) => (
            <div key={i} className="exercise-card">
              <div className="exercise-img-placeholder" style={{
                display: 'grid', placeItems: 'center', fontSize: '1.4rem'
              }}>🏋️</div>
              <p>{ex.name}</p>
              <p>{ex.time}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default WorkoutPlanScreen;