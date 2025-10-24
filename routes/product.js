const express = require('express');
const router = express.Router();

// Product detail page
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  const db = req.db;
  
  db.query('SELECT * FROM products WHERE id = ?', [productId], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      req.flash('error', 'Terjadi kesalahan sistem');
      return res.redirect('/');
    }
    
    if (results.length === 0) {
      req.flash('error', 'Produk tidak ditemukan');
      return res.redirect('/');
    }
    
    const product = results[0];
    
    res.render('product', {
      title: `${product.nama_produk} - ETechStore`,
      product: product,
      user: req.session.user || null
    });
  });
});

// Product listing by category
router.get('/category/:category', (req, res) => {
  const category = req.params.category;
  const db = req.db;
  
  db.query('SELECT * FROM products WHERE kategori = ?', [category], (err, products) => {
    if (err) {
      console.error('Database error:', err);
      products = [];
    }
    
    res.render('category', {
      title: `Kategori ${category} - ETechStore`,
      products: products,
      category: category,
      user: req.session.user || null
    });
  });
});

module.exports = router;
