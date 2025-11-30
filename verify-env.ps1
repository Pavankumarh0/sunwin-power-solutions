# Verify .env.local configuration
Write-Host "=== Checking .env.local Configuration ===" -ForegroundColor Cyan
Write-Host ""

$envFile = ".env.local"
if (Test-Path $envFile) {
    Write-Host "✅ .env.local file exists" -ForegroundColor Green
    Write-Host ""
    Write-Host "Current configuration:" -ForegroundColor Yellow
    Write-Host "-----------------------------------"
    
    $content = Get-Content $envFile
    foreach ($line in $content) {
        if ($line -match '^(SMTP_USER|SMTP_PASSWORD|ADMIN_EMAIL)=') {
            if ($line -match 'SMTP_PASSWORD=') {
                $password = ($line -split '=')[1]
                $length = $password.Length
                $hasSpaces = $password -match '\s'
                
                Write-Host "$line" -ForegroundColor White
                Write-Host "   Password Length: $length characters" -ForegroundColor $(if($length -eq 16){"Green"}else{"Red"})
                Write-Host "   Has Spaces: $hasSpaces" -ForegroundColor $(if($hasSpaces){"Red"}else{"Green"})
            } else {
                Write-Host "$line" -ForegroundColor White
            }
        }
    }
    
    Write-Host ""
    Write-Host "=== Troubleshooting Tips ===" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "If authentication is failing:" -ForegroundColor Yellow
    Write-Host "1. Make sure 2-Step Verification is enabled: https://myaccount.google.com/security" -ForegroundColor White
    Write-Host "2. Generate a NEW App Password: https://myaccount.google.com/apppasswords" -ForegroundColor White
    Write-Host "3. Password must be exactly 16 characters with NO spaces" -ForegroundColor White
    Write-Host "4. Restart server after updating .env.local" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host "❌ .env.local file NOT found!" -ForegroundColor Red
    Write-Host "Create it in the root directory with your email configuration." -ForegroundColor Yellow
}

