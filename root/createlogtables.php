<?php
// Database connection details
$host = 'localhost'; // Change this to your database host if not local
$username = 'root'; // Replace with your database username
$password = ''; // Replace with your database password
$dbname = 'database_bd'; // Replace with your database name

// Create connection
$conn = new mysqli($host, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database if it doesn't exist
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully<br>";
} else {
    die("Error creating database: " . $conn->error);
}

// Select the database
$conn->select_db($dbname);

// SQL to create 'users' table
$table = "CREATE TABLE IF NOT EXISTS users (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
if ($conn->query($table) === TRUE) {
    echo "Table 'users' created successfully<br>";
} else {
    die("Error creating table: " . $conn->error);
}

// Close the connection
$conn->close();
?>