<?php
$conn = mysqli_connect("localhost", "root", "", "fairy_games");

if ($_POST) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email=$_POST['email'];

    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password' AND email='$email'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        header("Location: quiz.php");
        exit();
    } else {
        $error = "Invalid Credentials ❌";
    }
}
?>
<head>
    <title>Login Page</title>
    <link rel="stylesheet" href="style/login.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body>

<div class="login-container">
    <form method="POST">
        <h2>Welcome Back 💖</h2>
<p style="font-size:14px; color:#888;">Login to continue your journey</p>
        <h2>Login</h2>

        <input type="text" name="username" placeholder="Enter your name"><br>
        <input type="password" name="password" placeholder="******"><br>
        <input type="email" name="email" placeholder="abc@gmail.com"><br>

        <button type="submit">Login</button>
    </form>

    <?php
    if (isset($error)) {
        echo "<p class='error'>$error</p>";
    }
    ?>
</div>

</body>