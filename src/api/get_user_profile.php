<?php
session_start();

header('Content-Type: application/json');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myanimelist";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(array('success' => false, 'message' => 'Connection failed: ' . $conn->connect_error)));
}

$user_id = $_SESSION['user_id'];

$sql = "SELECT username FROM users WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$stmt->bind_result($username);
$stmt->fetch();
$stmt->close();

$sql = "SELECT a.title_name, a.image_url, ual.score
        FROM user_anime_list ual
        JOIN anime a ON ual.anime_id = a.id
        WHERE ual.user_id = ?
        ORDER BY ual.score DESC";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$anime_list = array();
while($row = $result->fetch_assoc()) {
    $anime_list[] = $row;
}

$stmt->close();
$conn->close();

echo json_encode(array(
    'username' => $username,
    'anime_list' => $anime_list
));
