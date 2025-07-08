#!/bin/bash

# PenPlanner Dashboard Deployment Script
echo "🚀 Deploying PenPlanner Dashboard..."

# FTP Server Details (Default values)
FTP_HOST="${FTP_HOST:-ftpcluster.loopia.se}"
FTP_USER="${FTP_USER:-PenPlanner}"
FTP_PASS="${FTP_PASS:-Flight2025!}"

# Build the project
echo "📦 Building project..."
npm run build

# Create deployment script for lftp
cat > upload_script.txt << EOF
set ftp:ssl-allow no
open ftp://$FTP_USER:$FTP_PASS@$FTP_HOST
lcd dist
cd penplanner.se/public_html
mirror --reverse --verbose ./ ./
quit
EOF

# Check if lftp is installed, if not provide alternative
if command -v lftp &> /dev/null; then
    echo "📤 Uploading files with lftp..."
    lftp -f upload_script.txt
    echo "✅ Deployment completed successfully!"
else
    echo "⚠️  lftp not found. Installing it or use alternative method..."
    
    # For macOS users
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "Installing lftp via Homebrew..."
        brew install lftp
        lftp -f upload_script.txt
    else
        echo "❌ Please install lftp or use manual FTP upload"
        echo "📁 Files are ready in the 'dist' folder"
        echo "🔗 Upload the entire 'dist' folder contents to your web root"
    fi
fi

# Clean up
rm upload_script.txt

echo "🎉 PenPlanner Dashboard deployed!"
echo "🌐 Visit: https://penplanner.se"