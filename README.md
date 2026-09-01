# AI Portfolio

An AI-powered portfolio application that provides an interactive and intelligent way to explore a developer's profile, projects, skills, and experience.

The project combines a modern React frontend with a Node.js backend and Google Gemini AI capabilities to create a more engaging portfolio experience.

## 🚀 Live Demo

**Live Application:** https://ai-portfolio-silk-beta.vercel.app/

**GitHub Repository:** https://github.com/mani0bne/AI_Portfolio

---

## 📌 Project Overview

AI Portfolio is a full-stack portfolio application designed to go beyond a traditional static portfolio website.

The application uses Artificial Intelligence to provide intelligent interactions and enhance the way users explore portfolio information. The system consists of a React-based frontend and a Node.js/Express backend that handles server-side functionality, AI integration, file processing, and database operations.

---

## ✨ Features

- Modern and responsive portfolio interface
- AI-powered functionality using Google Gemini
- Interactive portfolio experience
- Project and developer information presentation
- Backend API integration
- File upload support
- PDF processing capabilities
- Database integration using MongoDB
- Responsive user interface
- Client-side routing
- Production deployment support

---

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- Axios
- Lucide React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Google Generative AI (Gemini)
- Groq AI
- Axios
- CORS
- dotenv

### Additional Tools

- Multer – File uploads
- PDF Parse / PDF.js – PDF processing
- UUID – Unique identifiers
- Vercel – Frontend deployment

---

## 🏗️ Project Architecture

The application follows a client-server architecture.

```text
                    ┌─────────────────────┐
                    │     React Client    │
                    │   Vite + Tailwind   │
                    └──────────┬──────────┘
                               │
                            HTTP/API
                               │
                    ┌──────────▼──────────┐
                    │   Express Backend   │
                    │                     │
                    │  AI Processing      │
                    │  File Processing    │
                    │  API Logic          │
                    └───────┬───────┬─────┘
                            │       │
                     ┌──────▼──┐ ┌──▼──────────┐
                     │ Gemini  │ │   MongoDB   │
                     │   API   │ │  Database   │
                     └─────────┘ └─────────────┘
```

### Application Flow

1. The user interacts with the React frontend.
2. The frontend sends requests to the backend using HTTP APIs.
3. The Express server processes the request.
4. AI-related requests are handled using Google Gemini.
5. Data can be stored and retrieved through MongoDB.
6. Responses are sent back to the frontend and displayed to the user.

---

# 📁 Project Structure

```text
AI_Portfolio/
│
├── AiPortfolio/              # Frontend application
│   ├── public/               # Static assets
│   ├── src/                  # React source code
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.js        # Vite configuration
│   └── index.html
│
├── backend/                  # Backend application
│   ├── server.js             # Express server entry point
│   ├── package.json          # Backend dependencies
│   └── ...
│
├── package.json
├── index.html
└── .gitignore
```

---

# ⚙️ Local Development Setup

## Prerequisites

Make sure the following software is installed:

- Node.js (recommended: latest LTS version)
- npm
- MongoDB or MongoDB Atlas account
- Google Gemini/ Groq API key

---

# 💻 Frontend Setup

Navigate to the frontend directory:

```bash
cd AiPortfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will start on a local development URL provided by Vite.

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

# 🖥️ Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend directory.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_google_gemini_api_key
```

Start the backend server:

```bash
npm start
```

The backend will run using the Express server configuration.

---

# 🔐 Environment Variables

The project uses environment variables to protect sensitive credentials.

| Variable | Description |
|---|---|
| `PORT` | Port used by the backend server |
| `MONGODB_URI` | MongoDB connection string |
| `GEMINI_API_KEY` | Google Gemini API key |

> ⚠️ Never commit API keys, database credentials, or `.env` files to GitHub.

---

# 🤖 AI Integration

The backend integrates Google's Generative AI capabilities to provide AI-powered functionality within the portfolio application.

The Google Gemini API is accessed securely from the backend rather than exposing sensitive API credentials directly in the frontend.

This architecture helps keep API keys protected while allowing the frontend to communicate with the AI functionality through backend APIs.

---

# 📄 File and PDF Processing

The backend includes support for:

- File uploads
- PDF parsing
- PDF content processing

Libraries such as Multer, PDF Parse, and PDF.js are used to support document-related functionality.

---

# 🗄️ Database

MongoDB is used as the application's database solution.

Mongoose is used as the Object Data Modeling (ODM) library to manage communication between the Node.js backend and MongoDB.

---

# 🌐 Deployment

The frontend is deployed using Vercel.

### Deployment Workflow

```text
GitHub Repository
        │
        ▼
      Vercel
        │
        ▼
Production Deployment
```

For deployment:

1. Push the latest code to GitHub.
2. Connect the repository to Vercel.
3. Configure the frontend root directory if required.
4. Add environment variables where necessary.
5. Deploy the application.

**Live Deployment:** [Add your Vercel URL here]

---

# 🔧 Available Frontend Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates a production build |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Previews the production build |

# 🔧 Available Backend Commands

| Command | Description |
|---|---|
| `npm start` | Starts the Express backend |

---

# 🚧 Future Improvements

Potential future improvements include:

- User authentication
- Admin dashboard for portfolio management
- Enhanced AI conversation capabilities
- Improved project recommendation features
- Chat history
- Better analytics
- Automated content updates
- Improved backend deployment and monitoring
- Unit and integration testing

---

# 👨‍💻 Developer

**Manihas N**

GitHub: https://github.com/mani0bne

---

# 📜 License

This project is currently intended for portfolio and educational purposes.
