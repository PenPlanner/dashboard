#!/bin/bash

# Complete deployment script for MarkOS Labs FTP
echo "🚀 Complete deployment to MarkOS Labs..."

# FTP Server Details
FTP_HOST="ftpcluster.loopia.se"
FTP_USER="markoslabs"
FTP_PASS="Flight2025!"

# Build the project
npm run build

# Upload all files with complete structure
lftp ftp://$FTP_USER:$FTP_PASS@$FTP_HOST -e "
set ftp:ssl-allow no
lcd dist
put index.html
put vite.svg
put favicon.svg
mkdir -p assets
cd assets
lcd assets
mput *
cd ..
mkdir -p PenPlanner
mkdir -p Onboarding
mkdir -p Equiply
mkdir -p Toolbox
quit
"

echo "✅ MarkOS Labs complete deployment finished!"
echo "🌐 Visit: https://www.markoslabs.se"