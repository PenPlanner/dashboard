#!/bin/bash

# Quick deployment script using default FTP credentials
echo "🚀 Quick deployment to penplanner.se..."

# FTP Server Details (using defaults)
FTP_HOST="ftpcluster.loopia.se"
FTP_USER="PenPlanner"
FTP_PASS="Flight2025!"

# Build and deploy
npm run build

# Upload main files only
lftp ftp://$FTP_USER:$FTP_PASS@$FTP_HOST -e "
set ftp:ssl-allow no
cd penplanner.se/public_html
lcd dist
put index.html
put vite.svg
cd assets
lcd assets
mput *
quit
"

echo "✅ Quick deployment completed!"
echo "🌐 Visit: https://penplanner.se"