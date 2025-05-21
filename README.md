# Sterkspruit

Sterkspruit is a full-stack blogging platform built with the MERN stack (MongoDB, Express, React, Node.js), designed to keep locals informed and attract tourists to the town of Sterkspruit. The goal is to empower the community with real-time updates, local business exposure, and development-focused content.

## 🌍 Purpose

This platform is built to:
- Share news and updates from Sterkspruit
- Inform locals and visitors about events and opportunities
- Encourage economic activity and local development
- Give a voice to the community through content and storytelling

## 🚀 Features

- 📰 Create, edit, and manage blog posts
- 🔐 User authentication (Email/Password & Google Sign-in)
- 🧑‍💻 User profiles and dashboard
- 🔎 Search and filter blogs by keywords
- 🖼️ Upload blog images via AWS S3
- 📈 Trending and latest blogs display
- 🎛️ Admin panel for content moderation

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- Firebase Admin SDK (for Google Auth)
- AWS S3 (for image uploads)
- Bcrypt (for password hashing)
- JWT (for authentication)

### Prerequisites
- Node.js & npm
- MongoDB (local or Atlas)
- AWS account with S3 bucket
- Firebase project (for Google login)

### Clone the repository
```bash
git clone https://github.com/iamsihlegqeza/sterkspruit.git
cd sterkspruit

# In root folder
cd client
npm install

cd ../server
npm install

Live Demo
sterkspruit.netlify.app (Netlify for frontend, Render for backend)

Author
Sihle Gqeza
🔗 iamsihlegqeza.github.io
