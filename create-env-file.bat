@echo off
echo Creating .env.local file...

(
echo ADMIN_EMAIL=sunwinps@gmail.com
echo SMTP_HOST=smtp.gmail.com
echo SMTP_PORT=587
echo SMTP_USER=sunwinps@gmail.com
echo SMTP_PASSWORD=vchtpgapdqcnkxu
) > .env.local

echo.
echo ✅ .env.local file created successfully!
echo.
echo Next steps:
echo 1. Restart your development server (stop and run 'npm run dev' again)
echo 2. Test by visiting: http://localhost:3000/api/test-email
echo.
pause

