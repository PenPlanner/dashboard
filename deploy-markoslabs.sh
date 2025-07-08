#!/bin/bash

# Deployment script for MarkOS Labs FTP
echo "🚀 Deployment to MarkOS Labs..."

# FTP Server Details
FTP_HOST="ftpcluster.loopia.se"
FTP_USER="markoslabs"
FTP_PASS="Flight2025!"

# Build and deploy
npm run build

# Upload all files to root directory
lftp ftp://$FTP_USER:$FTP_PASS@$FTP_HOST -e "
set ftp:ssl-allow no
lcd dist
put index.html
put vite.svg
mkdir assets
cd assets
lcd assets
mput *
quit
"

echo "✅ MarkOS Labs deployment completed!"
echo "🌐 Visit: https://markoslabs.se"