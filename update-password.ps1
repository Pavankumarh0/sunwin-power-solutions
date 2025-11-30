# Script to update SMTP password in .env.local
Write-Host "Enter your NEW Gmail App Password (16 characters, no spaces):" -ForegroundColor Yellow
Write-Host "Example: vchtpgapdqcnkxu" -ForegroundColor Gray
$newPassword = Read-Host "App Password"

if ($newPassword) {
    # Remove any spaces from the password
    $newPassword = $newPassword -replace '\s', ''
    
    # Read current .env.local
    $envContent = Get-Content .env.local -ErrorAction SilentlyContinue
    
    if ($envContent) {
        # Update the password line
        $updatedContent = $envContent | ForEach-Object {
            if ($_ -match '^SMTP_PASSWORD=') {
                "SMTP_PASSWORD=$newPassword"
            } else {
                $_
            }
        }
        
        # Write back to file
        $updatedContent | Out-File -FilePath ".env.local" -Encoding utf8 -NoNewline
        
        Write-Host ""
        Write-Host "✅ Password updated in .env.local file!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Next steps:" -ForegroundColor Yellow
        Write-Host "1. Restart your development server (stop and run 'npm run dev' again)" -ForegroundColor Cyan
        Write-Host "2. Test by visiting: http://localhost:3000/api/test-email" -ForegroundColor Cyan
    } else {
        Write-Host "❌ Error: .env.local file not found!" -ForegroundColor Red
    }
} else {
    Write-Host "❌ No password provided. Cancelled." -ForegroundColor Red
}

