# React Client Management App

This project is a simple React application for managing clients using a mock API.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- **GET /client:** Fetch the list of clients.
- **ADD /client:** Add a new client.
- **UPDATE /client/:id:** Update an existing client.
- **DELETE /client/:id:** Delete a client.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/dev-habibKhan/Client-Management-Api-.git

2. Navigate to the project directory:

   ```bash
   cd Client-Management-Api-

3. Install dependencies:

   ```bash
   npm install

4. Run the project:

   ```bash
   npm run dev


## Usage

After setting up the project, you can perform various actions to manage clients. Here are some common tasks:

1. **View Clients:**
   Access the application through the provided URL and navigate to the client list.

2. **Add a Client:**
   - Click on the "Add Client" button.
   - Fill in the required information and submit the form.

3. **Update a Client:**
   - Click on the client you want to update.
   - Edit the details and save the changes.

4. **Delete a Client:**
   - Select the client you want to delete.
   - Confirm the deletion.

## API Endpoints

The application uses a mock API to perform client management tasks. Here are the available endpoints:

- **GET /client:**
  Fetch the list of clients.

- **POST /client:**
  Add a new client.

- **PUT /client/:id:**
  Update an existing client. Provide the client ID in the URL.

- **DELETE /client/:id:**
  Delete a client. Provide the client ID in the URL.
