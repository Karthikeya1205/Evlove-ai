# 🚀 Evolve AI — Intelligent Fitness Companion

A premium, fully responsive fitness web application built with React. Track your steps, plan workouts, chat with an AI coach, browse fitness reels, and shop for supplements — all in one sleek, dark-themed interface.

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### 🏠 Home Dashboard
- Body transformation visualizer (Current → Goal)
- Real-time stats grid — Steps, Calories Burned, Sleep duration
- Embedded Steps Tracker with circular progress ring

### 👟 Steps Tracker (JavaScript Engine)
- **Accelerometer-based step detection** on mobile devices using the `DeviceMotion` API
- **Desktop simulation mode** for testing/demo purposes
- Animated **SVG circular progress ring** with gradient stroke
- Derived metrics: Calories burned, Distance (km), Active minutes
- **7-day history bar chart** with color-coded today highlight
- Start / Pause / Reset controls
- **localStorage persistence** — your steps survive page refreshes

### 🏋️ Workouts
- Focus area card with exercise details (duration, calories)
- Weekly workout plan preview
- Exercise grid with time indicators

### 🤖 AI Coach
- Tab-based interface: **AI Chat** and **Diet Plan**
- Chat UI with message bubbles (AI & User styles)
- Diet plan cards with meal breakdowns (Breakfast, Lunch, etc.)
- "Generate New Diet Plan" action button

### 🎬 Reels
- Full-screen immersive reel viewer
- Social engagement sidebar (Like, Comment, Share with counts)
- Creator info overlay with hashtags

### 🛒 Shop
- Product grid with emoji-based product cards
- Product details: name, price, and Add to Cart buttons
- Responsive grid: 1-col (mobile) → 2-col → 3-col → 4-col (desktop)

---

## 📱 Responsive Design

The app is fully responsive across **all device sizes**:

| Breakpoint | Device | Layout |
|---|---|---|
| `≤ 374px` | Small phones | 2-col stats, compact nav |
| `375–767px` | Standard phones | Mobile-first default |
| `768–1023px` | Tablets | Centered nav, wider cards |
| `1024–1439px` | Laptops/Desktops | 4-col grids, wider content |
| `≥ 1440px` | Large displays | Max-width constrained |
| Landscape | Rotated devices | Compact vertical layout |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI framework |
| **Vanilla CSS** | Custom design system with CSS variables |
| **JavaScript ES6+** | Steps tracking engine, state management |
| **SVG** | Animated progress ring, navigation icons |
| **localStorage** | Client-side data persistence |
| **DeviceMotion API** | Accelerometer step detection (mobile) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 16.x
- **npm** ≥ 8.x

### Installation

```bash
# Clone the repository
git clone https://github.com/Karthikeya1205/Evlove-ai.git

# Navigate to the project
cd Evlove-ai

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at **http://localhost:3000**

### Production Build

```bash
npm run build
```

Generates an optimized build in the `build/` folder, ready for deployment.

---

## 📁 Project Structure

```
evolve-ai-app/
├── public/
│   └── index.html              # HTML entry point with SEO meta tags
├── src/
│   ├── App.jsx                 # Main app — screen routing & layout
│   ├── index.js                # React DOM entry point
│   ├── index.css               # Global design system & responsive styles
│   ├── components/
│   │   └── common/
│   │       └── BottomNavBar.jsx # SVG icon bottom navigation
│   └── screens/
│       ├── Home/
│       │   ├── HomeScreen.jsx   # Dashboard with stats grid
│       │   └── StepsTracker.jsx # 🔥 Steps tracking engine
│       ├── Workouts/
│       │   └── WorkoutPlanScreen.jsx
│       ├── AICoach/
│       │   ├── AICoachScreen.jsx
│       │   ├── ChatTab.jsx
│       │   └── DietPlanTab.jsx
│       ├── Reels/
│       │   └── ReelsScreen.jsx
│       └── Shop/
│           └── ShopScreen.jsx
├── .gitignore
├── package.json
└── README.md
```

---

## 🎨 Design System

The app uses a custom CSS design system with:

- **CSS Custom Properties** for consistent theming
- **Glassmorphism** — frosted glass cards with backdrop blur
- **Gradient accents** — Pink-to-red primary, orange-to-red secondary
- **Dark theme** — Deep navy/black backgrounds (#0a0a0f)
- **Inter font** — Clean, modern typography from Google Fonts
- **Micro-animations** — Fade-up transitions, hover effects, smooth progress rings

---

## 🏃 Steps Tracker — How It Works

```
┌─────────────────────────────────────────┐
│           DeviceMotion API              │
│    (accelerationIncludingGravity)       │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│     Magnitude = √(x² + y² + z²)        │
│     Delta = |current - previous|        │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  Step detected if:                      │
│    • Delta > 1.2 (threshold)            │
│    • Time since last step > 300ms       │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  Update state → Persist to localStorage │
│  Derive: calories, distance, active min │
└─────────────────────────────────────────┘
```

On desktop (no accelerometer), the tracker runs a **simulation** that increments steps every 800ms for demo purposes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Karthikeya** — [@Karthikeya1205](https://github.com/Karthikeya1205)

---

> Built with ❤️ and React
