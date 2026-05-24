# Threesha – Portfolio (MERN Stack)

A personal portfolio website built with **MongoDB, Express.js, React.js, and Node.js**.

## Project Structure

```
portfolio/
├── client/          # React frontend
│   ├── public/
│   └── src/
│       └── components/
│           ├── Navbar/
│           ├── Hero/
│           ├── About/
│           ├── Skills/
│           ├── Projects/
│           ├── Experience/
│           ├── Education/
│           ├── Achievements/
│           ├── Contact/
│           └── Footer/
└── server/          # Express backend
    ├── models/
    ├── routes/
    └── index.js
```

## Getting Started

### 1. Install dependencies

```bash
# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

### 2. Configure environment

```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and email credentials
```

### 3. Run the app

Open two terminals:

```bash
# Terminal 1 – Backend (port 5000)
cd server && npm run dev

# Terminal 2 – Frontend (port 3000)
cd client && npm start
```

Visit `http://localhost:3000`

## Features

- Animated hero section with typewriter effect
- Filterable projects section
- Contact form connected to Express API (saves to MongoDB)
- Fully responsive design
- Smooth scroll navigation
- Dark theme with indigo accent

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React.js, CSS3, Framer Motion     |
| Backend   | Node.js, Express.js               |
| Database  | MongoDB + Mongoose                |
| Icons     | React Icons                       |
| Scroll    | React Scroll                      |
