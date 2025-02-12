<<<<<<< HEAD
# Govt_Schemes
=======
# Government Policy Application

## Overview
The Government Policy Application is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to centralize and automate government policy registrations. The application aims to reduce manual efforts and long queues for beneficiaries, particularly in rural areas, by providing a user-friendly platform for accessing and registering for various government policies.

## Features
- **Centralized Policy Information**: Access to all current and upcoming government policies in real-time.
- **Multilingual Support**: Available in both English and Hindi to cater to a diverse user base.
- **Voice Assistance**: Voice chat option to explain policies for users who may be illiterate.
- **Automated Eligibility Checks**: Users can easily check their eligibility for various policies.
- **Real-Time Updates**: Users receive notifications for new policies and updates to existing ones.
- **Machine Learning Integration**: Provides personalized policy recommendations based on user data and preferences.
- **User-Friendly Interface**: Professional and creative UI with engaging graphics and effects.

## Project Structure
```
govt-policy-app
├── backend
│   ├── controllers
│   │   └── policyController.js
│   ├── models
│   │   └── policyModel.js
│   ├── routes
│   │   └── policyRoutes.js
│   ├── services
│   │   └── mlService.js
│   ├── app.js
│   └── config
│       └── db.js
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   └── PolicyCard.js
│   │   ├── context
│   │   │   └── PolicyContext.js
│   │   ├── pages
│   │   │   └── HomePage.js
│   │   ├── App.js
│   │   └── index.js
├── ml
│   └── policyRecommendationModel.py
├── aws
│   └── awsConfig.js
├── package.json
├── README.md
└── .env
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/govt-policy-app.git
   ```
2. Navigate to the project directory:
   ```
   cd govt-policy-app
   ```
3. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
4. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```
5. Set up environment variables in the `.env` file.

## Usage
1. Start the backend server:
   ```
   cd backend
   node app.js
   ```
2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
>>>>>>> 2b828d9 (Initial commit)
