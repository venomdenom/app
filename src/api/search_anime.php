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

$query = $_GET['q'];
$sql = "SELECT * FROM anime WHERE title_name LIKE '%$query%'";
$result = $conn->query($sql);

$search_results = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $search_results[] = $row;
    }
}
$conn->close();

echo json_encode($search_results);
