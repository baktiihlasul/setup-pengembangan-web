<?php include('../includes/db_connect.php'); ?>

<form action="" method="POST" class="login-form">
  <img src="../assets/img/logo.png" alt="logo" class="logo">
  <input type="email" name="email" placeholder="Masukkan email Anda" required>
  <input type="password" name="password" placeholder="Masukkan password" required>
  <button type="submit" name="login">Masuk</button>
</form>

<?php
if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $query = mysqli_query($conn, "SELECT * FROM users WHERE email='$email' AND password='$pass'");
    if (mysqli_num_rows($query) > 0) {
        header("Location: ../index.php");
    } else {
        echo "<p>Email atau password salah!</p>";
    }
}
?>
