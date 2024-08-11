# Recipe Management System

## Overview

This is a Recipe Management System built with Node.js, Express, PostgreSQL, and Passport.js for user authentication. It supports local authentication and Google OAuth for logging in, and it allows users to manage their recipes.

## Features

- **User Registration and Login**: Users can register, log in with a local account or Google OAuth, and manage their recipes.
- **Recipe Management**: Users can create, edit, view, and delete their recipes.
- **JWT Authentication**: JSON Web Tokens (JWT) are used for session management and user authentication.
- **Google OAuth**: Users can sign in using their Google account.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for Node.js.
- **PostgreSQL**: Relational database for storing user and recipe data.
- **Passport.js**: Authentication middleware for Node.js.
- **bcrypt**: Library for hashing passwords.
- **jsonwebtoken (JWT)**: Library for generating and verifying JWTs.
- **dotenv**: Module for loading environment variables from a `.env` file.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MDAYYAN-007/your-repo.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repo
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   JWT_SECRET=your_jwt_secret
   SESSION_SECRET=your_session_secret
   PG_USER=your_postgres_user
   PG_HOST=your_postgres_host
   PG_DATABASE=your_postgres_database
   PG_PASSWORD=your_postgres_password
   PG_PORT=your_postgres_port
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

5. Start the server:
   ```bash
   nodemon index.js
   ```

## Endpoints

- **GET /**: Redirects to the registration page if no token is present, or to the user's recipe page if a valid token is found.
- **GET /register**: Renders the registration page.
- **GET /login**: Renders the login page.
- **GET /recipes/:id**: Displays recipes for a specific user.
- **GET /auth/google**: Initiates Google OAuth authentication.
- **GET /auth/google/callback**: Handles Google OAuth callback and redirects to the user's recipe page.
- **GET /edit/:id**: Renders the edit page for a specific recipe.
- **GET /logout**: Logs out the user and clears the JWT token.
- **POST /register**: Registers a new user.
- **POST /login**: Authenticates a user with local credentials.
- **POST /new/:id**: Renders the page to create a new recipe.
- **POST /post/:id**: Adds a new recipe.
- **POST /edited/:id**: Updates an existing recipe.
- **POST /delete/:id**: Deletes a specific recipe.
- **POST /closed/:id**: Redirects to the user's recipe page.

## Acknowledgments

- Thanks to the creators of Express.js, Passport.js, and other libraries used in this project.
