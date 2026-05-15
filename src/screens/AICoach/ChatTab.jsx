// src/screens/AICoach/ChatTab.jsx
import React from 'react';

const ChatTab = () => {
    return (
        <div className="chat-container">
            <div className="message-list">
                <div className="message ai">
                    Hello! How can I help you with your fitness and diet goals today?
                </div>
                <div className="message user">
                    What's a good post-workout meal for muscle gain?
                </div>
                <div className="message ai">
                    A great option is grilled chicken breast with quinoa and a side of steamed broccoli. It's high in protein and has complex carbs to replenish energy.
                </div>
            </div>
            <div className="chat-input-area">
                <input type="text" className="chat-input" placeholder="Ask your AI coach..." />
                <button className="send-button">➤</button>
            </div>
        </div>
    );
};

export default ChatTab;