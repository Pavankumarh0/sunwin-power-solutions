@echo off
echo ============================================
echo   Clean Installation Script
echo ============================================
echo.
echo This will:
echo 1. Stop all Node processes
echo 2. Delete node_modules folder
echo 3. Delete package-lock.json
echo 4. Reinstall all dependencies
echo 5. Start the development server
echo.
echo This may take 5-10 minutes...
echo.
pause

echo Step 1: Stopping Node processes...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul
echo Done!
echo.

echo Step 2: Deleting node_modules...
if exist node_modules (
    rmdir /s /q node_modules
    echo Done!
) else (
    echo node_modules not found, skipping...
)
echo.

echo Step 3: Deleting package-lock.json...
if exist package-lock.json (
    del package-lock.json
    echo Done!
) else (
    echo package-lock.json not found, skipping...
)
echo.

echo Step 4: Reinstalling dependencies...
echo This will take several minutes...
call npm install
echo Done!
echo.

echo Step 5: Starting development server...
echo.
echo ============================================
echo   Installation Complete!
echo ============================================
echo.
echo Your website should open at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
call npm run dev

