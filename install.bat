@echo off
echo Installing ETechStore Node.js Dependencies...
echo.

echo Installing npm packages...
npm install

echo.
echo Installation completed!
echo.
echo Next steps:
echo 1. Make sure MySQL is running
echo 2. Import database/etechstore.sql to your MySQL database
echo 3. Update config.env with your database credentials
echo 4. Run: npm run dev
echo.
pause
