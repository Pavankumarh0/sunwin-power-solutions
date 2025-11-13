@echo off
echo ============================================
echo   Fixing Autoprefixer Error
echo ============================================
echo.

echo Step 1: Stopping any running servers...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo Step 2: Installing autoprefixer and postcss...
call npm install -D autoprefixer postcss
echo.

echo Step 3: Verifying installation...
call npm list autoprefixer
echo.

echo Step 4: Starting development server...
echo.
echo Your website will open at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
call npm run dev

