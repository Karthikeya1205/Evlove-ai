import React, { useState } from 'react';
import ChatTab from './ChatTab';
import DietPlanTab from './DietPlanTab';

const AICoachScreen = () => {
  const [activeTab, setActiveTab] = useState('AI Coach');

  return (
    <div className="screen" id="ai-coach-screen">
      <header className="page-header">
        <h2>AI Coach</h2>
      </header>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'AI Coach' ? 'active' : ''}`}
          onClick={() => setActiveTab('AI Coach')}
        >AI Coach</button>
        <button
          className={`tab-button ${activeTab === 'Diet Plan' ? 'active' : ''}`}
          onClick={() => setActiveTab('Diet Plan')}
        >Diet Plan</button>
      </div>
      <div>{activeTab === 'AI Coach' ? <ChatTab /> : <DietPlanTab />}</div>
    </div>
  );
};

export default AICoachScreen;