const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Login page
router.get('/login', (req, res) => {
  res.render('auth/login', {
    title: 'Login - ETechStore',
    error: req.flash('error'),
    success: req.flash('success')
  });
});

// Login process
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const db = req.db;
  
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      req.flash('error', 'Terjadi kesalahan sistem');
      return res.redirect('/auth/login');
    }
    
    if (results.length === 0) {
      req.flash('error', 'Email atau password salah!');
      return res.redirect('/auth/login');
    }
    
    const user = results[0];
    
    // For now, using plain text comparison (should be hashed in production)
    if (user.password === password) {
      req.session.user = {
        id: user.id,
        nama: user.nama,
        email: user.email,
        role: user.role
      };
      req.flash('success', 'Login berhasil!');
      res.redirect('/');
    } else {
      req.flash('error', 'Email atau password salah!');
      res.redirect('/auth/login');
    }
  });
});

// Register page
router.get('/register', (req, res) => {
  res.render('auth/register', {
    title: 'Register - ETechStore',
    error: req.flash('error'),
    success: req.flash('success')
  });
});

// Register process
router.post('/register', (req, res) => {
  const { nama, email, password, confirmPassword } = req.body;
  const db = req.db;
  
  if (password !== confirmPassword) {
    req.flash('error', 'Password tidak cocok!');
    return res.redirect('/auth/register');
  }
  
  // Check if email already exists
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      req.flash('error', 'Terjadi kesalahan sistem');
      return res.redirect('/auth/register');
    }
    
    if (results.length > 0) {
      req.flash('error', 'Email sudah terdaftar!');
      return res.redirect('/auth/register');
    }
    
    // Insert new user
    db.query(
      'INSERT INTO users (nama, email, password, role) VALUES (?, ?, ?, ?)',
      [nama, email, password, 'user'],
      (err, result) => {
        if (err) {
          console.error('Database error:', err);
          req.flash('error', 'Terjadi kesalahan sistem');
          return res.redirect('/auth/register');
        }
        
        req.flash('success', 'Registrasi berhasil! Silakan login.');
        res.redirect('/auth/login');
      }
    );
  });
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Session destroy error:', err);
    }
    res.redirect('/');
  });
});

module.exports = router;
