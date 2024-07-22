<?php
header('Content-Type: application/json');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myanimelist";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM anime";
$result = $conn->query($sql);

$anime_list = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $anime_list[] = $row;
    }
}
$conn->close();

echo json_encode($anime_list);
