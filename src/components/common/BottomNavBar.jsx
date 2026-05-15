import React from 'react';

const navItems = [
  { id: 'Home', label: 'Home', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { id: 'Workouts', label: 'Workouts', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5L17.5 17.5"/><path d="M7 2l-5 5 3 3 5-5z"/><path d="M17 22l5-5-3-3-5 5z"/><line x1="12" y1="8" x2="16" y2="12"/></svg> },
  { id: 'AI Coach', label: 'AI Coach', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1"/></svg> },
  { id: 'Reels', label: 'Reels', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg> },
  { id: 'Shop', label: 'Shop', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg> },
];

const BottomNavBar = ({ activeScreen, setActiveScreen }) => (
  <nav className="bottom-nav" id="bottom-nav">
    {navItems.map((item) => (
      <button
        key={item.id}
        id={`nav-${item.id.toLowerCase().replace(' ', '-')}`}
        className={`nav-btn ${activeScreen === item.id ? 'active' : ''}`}
        onClick={() => setActiveScreen(item.id)}
        aria-label={item.label}
      >
        {item.icon}
        <span>{item.label}</span>
      </button>
    ))}
  </nav>
);

export default BottomNavBar;