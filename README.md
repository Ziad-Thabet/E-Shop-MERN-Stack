# E-Shop MERN Stack

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
  - [5. Explore and Customize](#5-Explore-and-Customize)

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

# Port for the backend server
PORT=your_backend_port

# MongoDB connection URL
DB_URL=your_mongodb_connection_url

# JWT Secret Key
JWT_SECRET_KEY=your_jwt_secret_key

# JWT Token expiration time (in seconds)
JWT_EXPIRES=your_jwt_expires_in_seconds

# Activation secret for user registration
ACTIVATION_SECRET=your_activation_secret

# SMTP Service for email functionality
SMTP_SERVICE=your_smtp_service

# SMTP Host
SMTP_HOST=your_smtp_host

# SMTP Port
SMTP_PORT=your_smtp_port

# SMTP Password
SMTP_PASSWORD=your_smtp_password

# SMTP Email Address
SMTP_MAIL=your_smtp_email

# Stripe API Key
STRIPE_API_KEY=your_stripe_api_key

# Stripe Secret Key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Cloudinary Cloud Name
CLOUDINARY_NAME=your_cloudinary_name

# Cloudinary API Key
CLOUDINARY_API_KEY=your_cloudinary_api_key

# Cloudinary API Secret
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

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
