# MyAnimeList

This is the test web application for managing and searching anime, similar to MyAnimeList. This project is built using PHP, MySQL, and JavaScript with Bootstrap for styling.

## Technologies

- **Frontend:**
  - HTML5
  - CSS3 (Bootstrap)
  - JavaScript (AJAX)

- **Backend:**
  - PHP

- **Server:**
  - Nginx

## Setup and Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/venomdenom/app.git
    cd app
    ```

2. **Install dependencies:**

    Ensure you have PHP, MySQL, and Nginx installed on your machine.
    For Ubuntu:

    ```sh
    sudo apt install php
    sudo apt install mysql-server
    sudo apt install nginx
    ```

    For MacOS:

    ```sh
    brew install php
    brew install mysql-server
    brew install nginx
    ```

    Note: install brew if you dont have one by `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

3. **Create and configure the database:**

    - Import the SQL file to set up the database schema and initial data:

      ```sh
      mysql -u yourusername -p yourdatabase < src/database/create.sql
      ```

    - Update database connection settings in `api/*.php` (if applicable).


4. **Configure Nginx:**

    ```sh
    server {
    listen 80;
    server_name localhost;

    root path/to/your/project;
    index index.html;

    location /api {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        }
    }
    ```

5. **Start Nginx and PHP-FPM:**

    ```sh
    sudo service nginx start
    sudo service php-fpm start
    ```

6. **Access the application:**

    Open your web browser and navigate to `http://localhost` to see the application in action.

## Usage

1. **Registration and Login:**

    - Navigate to `http://localhost/register.html` to register a new account.
    - Log in at `http://localhost/login.html`.

2. **Search for Anime:**

    - Use the search functionality at `http://localhost/search.html` to find anime by title.

3. **View Profile:**

    - After logging in, you are redirected to your personal profile.
