const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  const db = req.db;
  
  // Get featured products
  db.query('SELECT * FROM products LIMIT 4', (err, products) => {
    if (err) {
      console.error('Error fetching products:', err);
      products = [];
    }
    
    res.render('layout', {
      title: 'ETechStore - Bangun PC Impianmu',
      content: 'home-content',
      products: products
    });
  });
});

module.exports = router;
