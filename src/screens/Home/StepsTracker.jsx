import React, { useState, useEffect, useRef, useCallback } from 'react';

// ── Step Detection Engine ──
const STEP_THRESHOLD = 1.2;
const STEP_COOLDOWN_MS = 300;
const STORAGE_KEY = 'evolve_steps_data';

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadStepsData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return {};
}

function saveStepsData(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) { /* ignore */ }
}

function getLast7Days() {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }
  return days;
}

const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// ── SVG Ring Component ──
const StepsRing = ({ steps, goal }) => {
  const radius = 88;
  const stroke = 10;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = Math.min(steps / goal, 1);
  const offset = circumference - progress * circumference;

  return (
    <svg className="steps-ring" viewBox="0 0 176 176">
      <defs>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff8c42" />
          <stop offset="100%" stopColor="#ff4f81" />
        </linearGradient>
      </defs>
      <circle
        stroke="rgba(255,255,255,0.06)" fill="transparent"
        strokeWidth={stroke} r={normalizedRadius} cx={88} cy={88}
      />
      <circle
        stroke="url(#ringGrad)" fill="transparent"
        strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={circumference} strokeDashoffset={offset}
        r={normalizedRadius} cx={88} cy={88}
        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1)' }}
      />
    </svg>
  );
};

// ── Main Component ──
const StepsTracker = () => {
  const GOAL = 10000;
  const [stepsData, setStepsData] = useState(loadStepsData);
  const [isTracking, setIsTracking] = useState(false);
  const lastStepTime = useRef(0);
  const prevMagnitude = useRef(0);

  const todayKey = getTodayKey();
  const todaySteps = stepsData[todayKey] || 0;

  // Persist to localStorage
  useEffect(() => { saveStepsData(stepsData); }, [stepsData]);

  const addStep = useCallback(() => {
    setStepsData(prev => ({ ...prev, [todayKey]: (prev[todayKey] || 0) + 1 }));
  }, [todayKey]);

  // Accelerometer-based step detection
  useEffect(() => {
    if (!isTracking) return;
    let handler = null;

    if (window.DeviceMotionEvent) {
      handler = (event) => {
        const acc = event.accelerationIncludingGravity;
        if (!acc || acc.x == null) return;
        const magnitude = Math.sqrt(acc.x ** 2 + acc.y ** 2 + acc.z ** 2);
        const delta = Math.abs(magnitude - prevMagnitude.current);
        prevMagnitude.current = magnitude;
        const now = Date.now();
        if (delta > STEP_THRESHOLD && now - lastStepTime.current > STEP_COOLDOWN_MS) {
          lastStepTime.current = now;
          addStep();
        }
      };
      window.addEventListener('devicemotion', handler);
    }

    return () => {
      if (handler) window.removeEventListener('devicemotion', handler);
    };
  }, [isTracking, addStep]);

  // Simulate steps for demo on desktop (no accelerometer)
  useEffect(() => {
    if (!isTracking) return;
    const hasMotion = 'DeviceMotionEvent' in window;
    // On desktop, simulate steps
    if (!hasMotion || navigator.userAgent.includes('Win') || navigator.userAgent.includes('Mac')) {
      const interval = setInterval(() => { addStep(); }, 800);
      return () => clearInterval(interval);
    }
  }, [isTracking, addStep]);

  const toggleTracking = () => setIsTracking(prev => !prev);

  const resetToday = () => {
    setStepsData(prev => ({ ...prev, [todayKey]: 0 }));
  };

  // Derived data
  const calories = Math.round(todaySteps * 0.04);
  const distanceKm = (todaySteps * 0.000762).toFixed(2);
  const activeMin = Math.round(todaySteps / 100);
  const last7 = getLast7Days();
  const maxSteps7 = Math.max(...last7.map(d => stepsData[d] || 0), 1);

  return (
    <div className="steps-tracker glass-card" style={{ marginTop: 24 }} id="steps-tracker">
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 4 }}>Steps Tracker</h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: 12 }}>
        {isTracking ? '● Tracking active' : 'Tap start to begin tracking'}
      </p>

      <div className="steps-ring-wrapper">
        <StepsRing steps={todaySteps} goal={GOAL} />
        <div className="steps-center">
          <div className="steps-count">{todaySteps.toLocaleString()}</div>
          <div className="steps-goal">/ {GOAL.toLocaleString()} goal</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 16 }}>
        <button
          id="steps-toggle-btn"
          onClick={toggleTracking}
          style={{
            padding: '10px 28px', borderRadius: 12,
            background: isTracking ? 'rgba(255,80,80,0.2)' : 'var(--accent-gradient)',
            color: isTracking ? '#ff6b6b' : 'white',
            fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
            border: isTracking ? '1px solid rgba(255,80,80,0.3)' : 'none',
            transition: 'all 0.25s ease'
          }}
        >
          {isTracking ? '⏸ Pause' : '▶ Start'}
        </button>
        <button
          id="steps-reset-btn"
          onClick={resetToday}
          style={{
            padding: '10px 20px', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 12, background: 'transparent',
            color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem',
            cursor: 'pointer', transition: 'all 0.25s ease'
          }}
        >
          ↻ Reset
        </button>
      </div>

      <div className="steps-details">
        <div className="step-detail">
          <div className="step-detail-value">🔥 {calories}</div>
          <div className="step-detail-label">Calories</div>
        </div>
        <div className="step-detail">
          <div className="step-detail-value">📏 {distanceKm}</div>
          <div className="step-detail-label">km Distance</div>
        </div>
        <div className="step-detail">
          <div className="step-detail-value">⏱ {activeMin}</div>
          <div className="step-detail-label">Active Min</div>
        </div>
      </div>

      <div className="steps-history">
        <h4>Last 7 Days</h4>
        <div className="steps-bar-chart">
          {last7.map((day, i) => {
            const count = stepsData[day] || 0;
            const heightPct = Math.max((count / maxSteps7) * 100, 6);
            const isToday = day === todayKey;
            const dayOfWeek = DAY_LABELS[new Date(day + 'T00:00:00').getDay()];
            return (
              <div key={day} className="steps-bar-wrapper">
                <div
                  className={`steps-bar ${isToday ? 'today' : 'past'}`}
                  style={{ height: `${heightPct}%` }}
                  title={`${dayOfWeek}: ${count} steps`}
                />
                <span className="steps-day">{dayOfWeek}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepsTracker;
