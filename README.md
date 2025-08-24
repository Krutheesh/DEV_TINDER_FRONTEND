# 🌐 DevTinder – Developer Networking Application

**DevTinder** is a full-stack web application that helps developers connect, collaborate, and network based on shared skills and interests.  
It provides real-time **chat, connection requests, and authentication**, making developer networking interactive and seamless.  

🚀 **Backend Live API:** [DevTinder Backend (Vercel)](https://dev-tinder-backend.vercel.app/)  
📂 **Backend Repository:** [GitHub Repo](https://github.com/Krutheesh/DEV_TINDER_BACKEND/)  

---

## ✨ Features

- 🔐 **Authentication & Authorization** – Custom signup, login, and secure sessions  
- 🤝 **Connection Requests** – Send, accept, and manage connection requests  
- 💬 **Real-time Chat** – Powered by **Socket.io**  
- 🎨 **Responsive UI** – Built with **Tailwind CSS** and **DaisyUI**  
- ⚡ **State Management** – Handled with **Redux Toolkit**  
- 📂 **Profile Management** – Edit profile, view connections, and manage requests  
- 📈 **Feed & Cards** – View developer feeds and user cards dynamically  
- 🚫 **Route Protection** – Redirect to login if not authenticated  
- 🧪 **End-to-End Testing** – Basic e2e test coverage for critical flows  

---

## 🛠️ Tech Stack

**Frontend**
- React.js + Vite  
- Redux Toolkit  
- Tailwind CSS + DaisyUI  
- React Router DOM  
- Axios  
- Socket.io-client  

**Backend**
- Node.js  
- Express.js  
- MongoDB  
- Socket.io  
- JWT Authentication  

---

## 🚀 Frontend Setup

Follow these steps to set up and run the frontend locally:

## 1️⃣ Clone the frontend repository

git clone https://github.com/Krutheesh/DEV_TINDER_FRONTEND.git

## 2️⃣ Go into the project directory
cd DEV_TINDER_FRONTEND

## 3️⃣ Install dependencies
npm install

## 4️⃣ Set up environment variables
Create a `.env` file in the root directory and add:


### Replace with your local backend URL after running the backend locally
VITE_BACKEND_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000

## 5️⃣ Start the development server

npm run dev

## 6️⃣ Open the app in your browser
http://localhost:5173/

## 7️⃣ Integrate with backend

Make sure your backend is running locally at http://localhost:5000.

The frontend .env file should match your local backend URL:
VITE_BACKEND_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000

