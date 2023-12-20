# E-Shop MERN Stack with Socket Messaging

Welcome to the E-Shop application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, featuring socket-based messaging between customers and sellers. Additionally, this project utilizes Cloudinary for image uploads, Gmail SMTP for email functionality, Stripe for payment processing, JWT for authentication, and Tailwind CSS for styling.

## Table of Contents
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Socket](#socket)
  - [3. Configure Environment Variables](#3-configure-environment-variables)
  - [4. Run the Application](#4-run-the-application)

## Getting Started

### 1. Clone the Repository
bash
git clone https://github.com/Ziad-Thabet/E-Shop-MERN-Stack
 2. Install Dependencies
## 2. Install Dependencies

### Frontend
bash
cd frontend
npm install # or yarn

### Backend
bash
cd backend
npm install # or yarn

### Socket
bash
cd socket
npm install # or yarn

## 3. Configure Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

env
# MongoDB connection string
MONGO_URI=your_mongodb_connection_string

# Cloudinary configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Gmail SMTP configuration
SMTP_EMAIL=your_gmail_email
SMTP_PASSWORD=your_gmail_password

# Stripe API key
STRIPE_SECRET_KEY=your_stripe_secret_key

# JWT Secret Key
JWT_SECRET=your_jwt_secret

# Port for the backend server
PORT=8000

## 4. Run the Application

### Run the Frontend
bash
cd frontend
npm start

### Run the Backend

bash
cd backend
npm start

### Run the Socket

bash
cd socket
npm start

## 5. Explore and Customize

Now, the E-Shop application should be up and running. Open your browser and navigate to `http://localhost:3000` to access the application.

Feel free to explore the features and functionalities, and customize the application according to your needs. If you have any questions or encounter issues, please refer to the documentation or open an issue on the [GitHub repository](https://github.com/Ziad-Thabet/E-Shop-MERN-Stack).

Happy shopping! 🛍️
