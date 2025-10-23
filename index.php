<?php include('includes/header.php'); ?>
<link rel="stylesheet" href="assets/css/style.css">

<div class="hero">
  <h2>Bangun PC impianmu hanya di <span>ETechStore</span></h2>
  <p>Temukan berbagai part PC original dan bergaransi.</p>
</div>

<div class="kategori">
  <h3>Kategori</h3>
  <div class="kategori-list">
    <button>Fan</button>
    <button>Motherboard</button>
    <button>RAM</button>
    <button>VGA Card</button>
  </div>
</div>

<div class="produk-unggulan">
  <h3>Produk Unggulan</h3>
  <?php
  include('includes/db_connect.php');
  $result = mysqli_query($conn, "SELECT * FROM products LIMIT 4");
  while ($row = mysqli_fetch_assoc($result)) {
      echo "
      <div class='produk'>
          <img src='assets/img/{$row['gambar']}' alt='{$row['nama_produk']}'>
          <h4>{$row['nama_produk']}</h4>
          <p>Rp " . number_format($row['harga'], 0, ',', '.') . "</p>
          <button>Tambahkan ke Troli</button>
      </div>";
  }
  ?>
</div>

<?php include('includes/footer.php'); ?>
