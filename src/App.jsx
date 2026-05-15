import React, { useState } from 'react';
import './index.css';
import BottomNavBar from './components/common/BottomNavBar';
import HomeScreen from './screens/Home/HomeScreen';
import WorkoutPlanScreen from './screens/Workouts/WorkoutPlanScreen';
import AICoachScreen from './screens/AICoach/AICoachScreen';
import ReelsScreen from './screens/Reels/ReelsScreen';
import ShopScreen from './screens/Shop/ShopScreen';

const App = () => {
  const [activeScreen, setActiveScreen] = useState('Home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'Home': return <HomeScreen />;
      case 'Workouts': return <WorkoutPlanScreen />;
      case 'AI Coach': return <AICoachScreen />;
      case 'Reels': return <ReelsScreen />;
      case 'Shop': return <ShopScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="app-shell">
      <main className="app-main">{renderScreen()}</main>
      <BottomNavBar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  );
};

export default App;