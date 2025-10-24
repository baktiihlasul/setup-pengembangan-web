<<<<<<< HEAD
# ETechStore - Node.js Version

ETechStore adalah platform e-commerce untuk menjual berbagai part PC original dan bergaransi. Aplikasi ini telah dikonversi dari PHP ke Node.js menggunakan Express.js framework.

## Fitur

- 🏠 **Homepage** - Menampilkan produk unggulan dan kategori
- 👤 **Authentication** - Login dan register pengguna
- 🛒 **Shopping Cart** - Tambah dan hapus produk dari keranjang
- 📱 **Responsive Design** - Tampilan yang responsif untuk semua device
- 🎨 **Modern UI** - Desain yang modern dan menarik

## Teknologi yang Digunakan

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Template Engine**: EJS
- **Styling**: CSS3 dengan Flexbox dan Grid
- **Authentication**: Express Session
- **Database Driver**: mysql2

## Instalasi

1. **Clone atau download project ini**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Setup Database**:
   - Import file `database/etechstore.sql` ke MySQL database
   - Pastikan MySQL server berjalan

4. **Konfigurasi Environment**:
   - Edit file `config.env` sesuai dengan konfigurasi database Anda:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=etechstore
   SESSION_SECRET=your-secret-key-here
   PORT=3000
   ```

5. **Jalankan aplikasi**:
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Akses aplikasi**:
   - Buka browser dan kunjungi `http://localhost:3000`

## Struktur Project

```
etechstore/
├── server.js              # Main server file
├── package.json           # Dependencies dan scripts
├── config.env             # Environment variables
├── routes/                # Express routes
│   ├── index.js          # Home routes
│   ├── auth.js           # Authentication routes
│   ├── cart.js           # Cart routes
│   └── product.js        # Product routes
├── views/                 # EJS templates
│   ├── layout.ejs        # Main layout
│   ├── index.ejs         # Homepage
│   ├── auth/             # Auth pages
│   ├── cart.ejs          # Cart page
│   ├── product.ejs       # Product detail
│   ├── category.ejs      # Category page
│   └── error.ejs         # Error page
├── public/               # Static assets
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   └── img/              # Images
└── database/             # Database files
    └── etechstore.sql    # Database schema
```

## API Endpoints

### Authentication
- `GET /auth/login` - Login page
- `POST /auth/login` - Login process
- `GET /auth/register` - Register page
- `POST /auth/register` - Register process
- `GET /auth/logout` - Logout

### Products
- `GET /` - Homepage with featured products
- `GET /product/:id` - Product detail
- `GET /product/category/:category` - Products by category

### Cart
- `GET /cart` - Cart page
- `POST /cart/add` - Add product to cart
- `DELETE /cart/remove/:id` - Remove product from cart

## Database Schema

### Users Table
- `id` (Primary Key)
- `nama` (VARCHAR)
- `email` (VARCHAR, Unique)
- `password` (VARCHAR)
- `role` (VARCHAR)

### Products Table
- `id` (Primary Key)
- `nama_produk` (VARCHAR)
- `kategori` (VARCHAR)
- `harga` (INT)
- `deskripsi` (TEXT)
- `gambar` (VARCHAR)

### Cart Table
- `id` (Primary Key)
- `user_id` (Foreign Key)
- `product_id` (Foreign Key)
- `jumlah` (INT)

## Development

Untuk development, gunakan:
```bash
npm run dev
```

Ini akan menjalankan server dengan nodemon untuk auto-restart saat ada perubahan file.

## Production

Untuk production:
```bash
npm start
```

Pastikan untuk:
- Set `NODE_ENV=production`
- Gunakan environment variables yang aman
- Setup reverse proxy (nginx/apache)
- Enable HTTPS

## Kontribusi

1. Fork project ini
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## Kontak

ETechStore - [@etechstore](https://twitter.com/etechstore)

Project Link: [https://github.com/etechstore/etechstore-nodejs](https://github.com/etechstore/etechstore-nodejs)
=======
Srtuktur Folder





<img width="598" height="1036" alt="image" src="https://github.com/user-attachments/assets/06eb18b5-ea4a-4229-931f-be8ac3f5d5e9" />





Database
<img width="1912" height="435" alt="image" src="https://github.com/user-attachments/assets/e69301b3-8b3e-4c57-b7bb-4a1521a55bee" />
>>>>>>> 65fdc413ba127cc0276728bff8fc98ee9c8f536c
