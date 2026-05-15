import React from 'react';

const ReelsScreen = () => (
  <div className="reels-container" id="reels-screen">
    <div style={{
      width: '100%', height: '100%',
      background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      display: 'grid', placeItems: 'center', fontSize: '4rem'
    }}>🎬</div>

    <div className="reel-header">
      <h3>Reels</h3>
      <span style={{ fontSize: '1.4rem' }}>📷</span>
    </div>

    <div className="reel-sidebar">
      <button>❤️<p>2.4k</p></button>
      <button>💬<p>342</p></button>
      <button>➤<p>1.2k</p></button>
    </div>

    <div className="reel-info">
      <p><strong>@fitness__jane</strong></p>
      <p>Perfect sit-up form for maximum abs engagement! 🔥 #abs #workout #fitness</p>
    </div>
  </div>
);

export default ReelsScreen;