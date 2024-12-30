# OrderStats

This is a full-stack OrderStats Application with a **NextJS frontend** and a **Node.js/Express backend**. 

App demo: [https://youtu.be/3J8cA3ka6Dk](https://youtu.be/drY12tCyCzg)

## Features

### Frontend
- Built with **Next.js** for a modern and responsive user interface.
- Uses **Axios** for seamless API communication.

### Backend
- Built with **Node.js** and **Express** for scalable server-side operations.
- **Sequelize** ORM with **MySQL** for efficient database management.

### Functionality
- **Data Source**:
  - Supports fetching and syncing data from a fake API.
  
- **Sales Listing View**:
  - Sync data dynamically from the API.
  - View sales order details and specific order information.
  - Perform advanced filtering, including:
    - **Search**
    - **Sort**
    - **Filter by criteria**
  - Use pagination for an organized and user-friendly listing.

- **Manage Sales View**:
  - Delete sales data directly from the interface.
  
## Prerequisites

Before running the application, make sure you have the following installed:

- **Node.js** (v20.18.0)
- **MySQL** 
- **npm** (Node.js command)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/syahmisenpai97/OrderStats.git
```

### 2. Database Setup

Ensure that you have MySQL installed and configured.

The Sequelize models will automatically sync the database structure when the backend server starts.

### 3. Backend Setup (Node.js/Express)

- Navigate to the backend folder:

```bash
cd OrderStats/backend
```

- Install backend dependencies:

```bash
npm install
```

- Add/Edit a `.env` file in the `backend` directory and configure your environment variables (e.g., for database connection):

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=qbeep_db
DB_DIALECT=mysql
PORT=5001
```

- Run database migrations and seeders (if any) using Sequelize.

- Start the backend server:

```bash
npm start
```

The backend server will be running on `http://localhost:5001`.

### 4. Frontend Setup (NextJS)

- Navigate to the frontend folder:

```bash
cd frontend
```

- Add/Edit a `.env.local` file in the `frontend` directory and configure your environment variables (e.g., for database connection):

```
NEXT_PUBLIC_API_URL=http://localhost:5001
```

- Install frontend dependencies:

```bash
npm install
```

- Start the frontend server:

```bash
npm start
```

The frontend app will be running on `http://localhost:3001`.

### 5. Optionally, Running Both Frontend and Backend Concurrently 
You can directly start both the backend and frontend with one command after setting up the .env file

To run both the backend and frontend simultaneously, navigate to the root project directory (`OrderStats`) and run:

```bash
npm install
npm start
```

This will start both the backend and frontend using `concurrently`.


## Contribution

Feel free to submit a pull request to contribute to this project. Any feedback is appreciated!

