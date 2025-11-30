# Check and display password information
Write-Host "=== Password Verification ===" -ForegroundColor Cyan
Write-Host ""

$envContent = Get-Content .env.local -ErrorAction SilentlyContinue

if ($envContent) {
    $passwordLine = $envContent | Where-Object { $_ -match '^SMTP_PASSWORD=' }
    
    if ($passwordLine) {
        $currentPassword = ($passwordLine -split '=')[1]
        $length = $currentPassword.Length
        $hasSpaces = $currentPassword -match '\s'
        
        Write-Host "Current Password Status:" -ForegroundColor Yellow
        Write-Host "  Length: $length characters" -ForegroundColor $(if($length -eq 16){"Green"}else{"Red"})
        Write-Host "  Has Spaces: $hasSpaces" -ForegroundColor $(if($hasSpaces){"Red"}else{"Green"})
        Write-Host ""
        
        if ($length -ne 16) {
            Write-Host "❌ PROBLEM: Password must be exactly 16 characters!" -ForegroundColor Red
            Write-Host ""
            Write-Host "Your password should be 16 characters (Gmail App Passwords are always 16 chars)" -ForegroundColor Yellow
            Write-Host ""
            Write-Host "Actions needed:" -ForegroundColor Cyan
            Write-Host "1. Generate a NEW App Password: https://myaccount.google.com/apppasswords" -ForegroundColor White
            Write-Host "2. Update SMTP_PASSWORD in .env.local with the new 16-character password" -ForegroundColor White
            Write-Host "3. Make sure to remove ALL spaces from the password" -ForegroundColor White
            Write-Host "4. Restart your development server" -ForegroundColor White
        } else {
            Write-Host "✅ Password length is correct (16 characters)" -ForegroundColor Green
            Write-Host ""
            Write-Host "If authentication still fails:" -ForegroundColor Yellow
            Write-Host "- Verify 2-Step Verification is enabled" -ForegroundColor White
            Write-Host "- Generate a fresh App Password" -ForegroundColor White
            Write-Host "- Make sure you restarted the server after updating .env.local" -ForegroundColor White
        }
    }
} else {
    Write-Host "❌ Could not read .env.local file" -ForegroundColor Red
}

Write-Host ""

