const express = require('express');
const router = express.Router();

// Cart page
router.get('/', (req, res) => {
  if (!req.session.user) {
    req.flash('error', 'Silakan login terlebih dahulu');
    return res.redirect('/auth/login');
  }
  
  const db = req.db;
  const userId = req.session.user.id;
  
  // Get cart items with product details
  const query = `
    SELECT c.*, p.nama_produk, p.harga, p.gambar 
    FROM cart c 
    JOIN products p ON c.product_id = p.id 
    WHERE c.user_id = ?
  `;
  
  db.query(query, [userId], (err, cartItems) => {
    if (err) {
      console.error('Error fetching cart:', err);
      cartItems = [];
    }
    
    res.render('cart', {
      title: 'Keranjang - ETechStore',
      cartItems: cartItems,
      user: req.session.user
    });
  });
});

// Add to cart
router.post('/add', (req, res) => {
  if (!req.session.user) {
    return res.json({ success: false, message: 'Silakan login terlebih dahulu' });
  }
  
  const { productId, quantity = 1 } = req.body;
  const db = req.db;
  const userId = req.session.user.id;
  
  // Check if item already exists in cart
  db.query(
    'SELECT * FROM cart WHERE user_id = ? AND product_id = ?',
    [userId, productId],
    (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.json({ success: false, message: 'Terjadi kesalahan sistem' });
      }
      
      if (results.length > 0) {
        // Update quantity
        db.query(
          'UPDATE cart SET jumlah = jumlah + ? WHERE user_id = ? AND product_id = ?',
          [quantity, userId, productId],
          (err) => {
            if (err) {
              console.error('Database error:', err);
              return res.json({ success: false, message: 'Terjadi kesalahan sistem' });
            }
            res.json({ success: true, message: 'Produk ditambahkan ke keranjang' });
          }
        );
      } else {
        // Add new item
        db.query(
          'INSERT INTO cart (user_id, product_id, jumlah) VALUES (?, ?, ?)',
          [userId, productId, quantity],
          (err) => {
            if (err) {
              console.error('Database error:', err);
              return res.json({ success: false, message: 'Terjadi kesalahan sistem' });
            }
            res.json({ success: true, message: 'Produk ditambahkan ke keranjang' });
          }
        );
      }
    }
  );
});

// Remove from cart
router.delete('/remove/:id', (req, res) => {
  if (!req.session.user) {
    return res.json({ success: false, message: 'Silakan login terlebih dahulu' });
  }
  
  const cartId = req.params.id;
  const db = req.db;
  
  db.query('DELETE FROM cart WHERE id = ? AND user_id = ?', [cartId, req.session.user.id], (err) => {
    if (err) {
      console.error('Database error:', err);
      return res.json({ success: false, message: 'Terjadi kesalahan sistem' });
    }
    res.json({ success: true, message: 'Produk dihapus dari keranjang' });
  });
});

module.exports = router;
