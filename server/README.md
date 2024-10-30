<!-- write basic description about the backend part of the project -->

# Server

This is the backend part of the project. It is built using Django and Django Rest Framework. It is responsible for handling the requests from the frontend and interacting with the database.

## Installation

1. Open the terminal and navigate to the server directory.
2. Run the following command to install the required packages:

    ```bash
    pip install poetry
    poetry install
    ```

3. Activate the virtual environment by running:

    ```bash
    poetry shell
    ```

4. Run the following command to start the server:

    ```bash
    python manage.py migrate
    python manage.py runserver
    ```

5. The server will start running on `http://localhost:8000/`.

## API Endpoints

- `/accounts/create/` - Create a new user account
- `/accounts/token/` - Login to the user account using jwt
- `/accounts/me/` - Get the details of the logged in user
- `accounts/refresh/` - Refresh the jwt token
- `/accounts/` - View all the user accounts if the logged in user is an admin
- `/accounts/<id:int>/` - View, post the details of a specific user account
<!-- - `/accounts/update/` - Update the details of the logged in user -->