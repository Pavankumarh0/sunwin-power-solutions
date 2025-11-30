# Create .env.local file with email configuration
$envContent = @"
ADMIN_EMAIL=sunwinps@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=sunwinps@gmail.com
SMTP_PASSWORD=vchtpgapdqcnkxu
"@

$envContent | Out-File -FilePath ".env.local" -Encoding utf8 -NoNewline

Write-Host "✅ .env.local file created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Restart your development server (stop and run 'npm run dev' again)" -ForegroundColor Cyan
Write-Host "2. Test by visiting: http://localhost:3000/api/test-email" -ForegroundColor Cyan

