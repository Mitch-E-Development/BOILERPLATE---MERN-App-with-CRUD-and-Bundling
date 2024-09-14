# Boilerplate Code for a MERN Stack App
***Includes CRUD and search routes, and client/server side bundling.***

## Overview

This boilerplate sets up a full-stack MERN (MongoDB, Express, React, Node.js) application with server-side bundling using Webpack for the backend and client-side bundling for the React frontend. It includes typical CRUD (Create, Read, Update, Delete) operations and search functionality.

## Features

- **Client-Side**: React application with routing using React Router v6.
- **Server-Side**: Node.js and Express backend with MongoDB integration.
- **Bundling**: Webpack configured for both client-side and server-side bundling.
- **Search Functionality**: Search items by name or description.
- **CRUD Operations**: Basic operations for managing items.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine. [Download Node.js](https://nodejs.org/)

### Project Structure

```
MERN-Boilerplate/
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   ├── webpack.config.js
│   └── .babelrc
└── server/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── config/
    ├── middleware/
    ├── package.json
    ├── server.js
    ├── webpack.config.js
    └── .babelrc
```

### Installation

#### Clone the Repository

```bash
git clone https://github.com/Mitch-E-Development/BOILERPLATE---MERN-App-with-CRUD-and-Bundling.git
```

#### Set Up the Client

1. Navigate to the `client` directory:

    ```bash
    cd client
    ```

2. Install client-side dependencies:

    ```bash
    npm install
    ```

3. Start the client development server:

    ```bash
    npm start
    ```

   The client application will be available at `http://localhost:3000`.

#### Set Up the Server

1. Navigate to the `server` directory:

    ```bash
    cd ../server
    ```

2. Install server-side dependencies:

    ```bash
    npm install
    ```

3. Configure environment variables:

   Create a `.env` file in the `server` directory and add your MongoDB URI:

    ```plaintext
    MONGO_URI=mongodb://localhost:27017/yourdbname
    ```

4. Build and start the server:

    ```bash
    npm run build
    npm start
    ```

   The server will be available at `http://localhost:5000`.

### Usage

- **Frontend**: Use the React app to interact with the backend API. You can create, read, update, and delete items, as well as search for them.
- **Backend**: The Express server provides API endpoints for managing items and searching through them.

### Configuration

#### Webpack (Client)

- **`client/webpack.config.js`**: Configures Webpack for bundling the client-side code.
- **`client/.babelrc`**: Babel configuration for transpiling JavaScript.

#### Webpack (Server)

- **`server/webpack.config.js`**: Configures Webpack for bundling the server-side code.
- **`server/.babelrc`**: Babel configuration for transpiling server-side JavaScript.

### API Endpoints

- **POST** `/api/items`: Create a new item.
- **GET** `/api/items`: Retrieve all items.
- **GET** `/api/items/search`: Search items by name or description.
- **PUT** `/api/items/:id`: Update an item by ID.
- **DELETE** `/api/items/:id`: Delete an item by ID.

### Testing

- For client-side testing, use tools like Jest and React Testing Library.
- For server-side testing, use tools like Mocha, Chai, and Supertest.


### License

This project is licensed under the MIT License. 

### Acknowledgements

- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)

