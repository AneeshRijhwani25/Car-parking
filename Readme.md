# Smart Car Parking 🚗

AutoParkIQ is an innovative solution designed to manage parking spaces efficiently. It combines a backend server built with **Node.js** and **Express**, a frontend interface developed using **React** and **Vite**, and an advanced machine learning model for real-time **car detection** with **TensorFlow** and **OpenCV**.

This comprehensive project allows users to book, verify, and manage parking slots seamlessly while integrating payment options like **Razorpay** for a smooth transaction experience.

## Table of Contents 📚

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Features ✨

- **User Authentication**: Secure signup and login functionality.
- **Parking Management**: Efficiently book, verify, and exit parking slots.
- **Payment Integration**: Integrated with **Razorpay** for payment processing.
- **Car Detection**: Leverages machine learning for real-time car detection 🚘.
- **Responsive UI**: A sleek, user-friendly interface built using **React** and **Tailwind CSS**.

## Installation ⚙️

### Prerequisites 🛠️

Before you begin, ensure you have the following installed:

- **Node.js**
- **Python 3.10.9**
- **MongoDB**
- **Virtual Environment (venv)**

### Backend

1. Navigate to the `Backend` directory:
    ```sh
    cd Backend
    ```

2. Install the required Node.js dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `Backend` directory and configure your environment variables:
    ```env
    PORT=4000
    MongoDBURI=your_mongodb_uri
    RAZORPAY_KEY_ID=your_razorpay_key_id
    RAZORPAY_KEY_SECRET=your_razorpay_key_secret
    ```

4. Install the Python dependencies:
    ```sh
    pip install -r requirements.txt
    ```

### Frontend

1. Navigate to the `Frontend` directory:
    ```sh
    cd Frontend
    ```

2. Install the required Node.js dependencies:
    ```sh
    npm install
    ```

## Usage 🚀

### Backend

1. Start the backend server:
    ```sh
    npm start
    ```

2. Launch the Flask server for car detection:
    ```sh
    python app.py
    ```

### Frontend

1. Run the frontend development server:
    ```sh
    npm run dev
    ```

2. Open your browser and visit `http://localhost:5173` to access the app.

## Project Structure 🗂️

Here's an overview of the project structure:

```
├── Backend
│   ├── CarPark
│   │   ├── controller
│   │   ├── model
│   │   ├── models
│   │   ├── route
│   │   ├── utils
│   │   ├── .env
│   │   ├── .gitattributes
│   │   ├── .gitignore
│   │   ├── app.py
│   │   ├── index.js
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── requirements.txt
├── Frontend
│   ├── public
│   ├── src
│   ├── .eslintrc.cjs
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   └── vite.config.js
└── Screenshot
```

## API Endpoints 🌐

Here are the available API endpoints for managing parking and user activities:

### User Authentication
- `POST /user/signup` - Signup a new user.
- `POST /user/login` - Login an existing user.

### Booking
- `POST /book/booking` - Book a parking slot.
- `GET /book/check-slot` - Check availability of parking slots.

### Area
- `GET /area` - Get parking area details.

### Verify
- `POST /verify/verifing` - Verify the booking code.

### Exit
- `POST /exit/exiting` - Exit the parking area.

### Orders
- `POST /orders/order` - Create a new order.
- `POST /orders/verify` - Verify an order.

