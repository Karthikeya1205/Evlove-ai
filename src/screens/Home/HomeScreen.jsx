import React from 'react';
import StepsTracker from './StepsTracker';

const HomeScreen = () => {
  return (
    <div className="screen" id="home-screen">
      <header className="page-header">
        <h2>Evolve AI</h2>
        <div className="header-actions">
          <span role="img" aria-label="sparkle">✨</span>
          <span role="img" aria-label="profile">👤</span>
        </div>
      </header>

      <div className="glass-card" style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 100, height: 130, borderRadius: 16,
              background: 'linear-gradient(135deg, #2a2a3a, #1a1a2a)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'grid', placeItems: 'center', fontSize: '2.5rem', marginBottom: 8
            }}>🏃</div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Current</p>
          </div>
          <div style={{ fontSize: '1.8rem', color: 'var(--text-secondary)' }}>→</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 100, height: 130, borderRadius: 16,
              background: 'linear-gradient(135deg, #1a2a1a, #2a3a2a)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'grid', placeItems: 'center', fontSize: '2.5rem', marginBottom: 8
            }}>💪</div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Goal</p>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-icon">👟</span>
          <div className="stat-value">8,432</div>
          <div className="stat-label">Steps</div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🔥</span>
          <div className="stat-value">1,240</div>
          <div className="stat-label">kcal Burned</div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🌙</span>
          <div className="stat-value">6h 12m</div>
          <div className="stat-label">Sleep</div>
        </div>
      </div>

      <StepsTracker />
    </div>
  );
};

export default HomeScreen;
