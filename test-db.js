const mysql = require('mysql2');
require('dotenv').config({ path: './config.env' });

// Database connection test
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

console.log('Testing database connection...');
console.log('Host:', process.env.DB_HOST);
console.log('User:', process.env.DB_USER);
console.log('Database:', process.env.DB_NAME);

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    console.log('\nPlease check:');
    console.log('1. MySQL server is running');
    console.log('2. Database "etechstore" exists');
    console.log('3. config.env file has correct credentials');
    process.exit(1);
  } else {
    console.log('✅ Connected to MySQL database successfully!');
    
    // Test query
    db.query('SELECT COUNT(*) as count FROM products', (err, results) => {
      if (err) {
        console.error('❌ Query test failed:', err.message);
        console.log('Please make sure the database schema is imported from database/etechstore.sql');
      } else {
        console.log('✅ Database query test successful!');
        console.log('Products in database:', results[0].count);
      }
      db.end();
    });
  }
});
