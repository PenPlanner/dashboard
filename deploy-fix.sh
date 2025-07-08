#!/bin/bash

# PenPlanner Dashboard - Fixed Deployment Script
echo "🚀 Deploying PenPlanner Dashboard to correct structure..."

# FTP Server Details
FTP_HOST="ftpcluster.loopia.se"
FTP_USER="PenPlanner"
FTP_PASS="Flight2025!"

# Build the project
echo "📦 Building project..."
npm run build

# Create deployment script for lftp
cat > upload_fix_script.txt << EOF
set ftp:ssl-allow no
open ftp://$FTP_USER:$FTP_PASS@$FTP_HOST

# Navigate to the correct directory
cd penplanner.se/public_html

# Upload main dashboard files
lcd dist
put index.html
put vite.svg

# Create and upload assets folder
mkdir assets
cd assets
lcd assets
mput *
cd ..

# Create project subdirectories and upload their content
mkdir PenPlanner
cd PenPlanner
lcd ../PenPlanner
put index.html
cd ..

mkdir Onboarding  
cd Onboarding
lcd ../Onboarding
put index.html
cd ..

mkdir Equiply
cd Equiply
lcd ../Equiply  
put index.html
cd ..

mkdir Verktygslada
cd Verktygslada
lcd ../Verktygslada
put index.html
cd ..

quit
EOF

# Check if lftp is installed and run deployment
if command -v lftp &> /dev/null; then
    echo "📤 Uploading files with lftp to correct structure..."
    lftp -f upload_fix_script.txt
    echo "✅ Deployment completed successfully!"
else
    echo "❌ lftp not found. Please install it first:"
    echo "brew install lftp"
    exit 1
fi

# Clean up
rm upload_fix_script.txt

echo "🎉 PenPlanner Dashboard deployed with correct structure!"
echo "📁 Structure created:"
echo "   /penplanner.se/public_html/"
echo "   ├── index.html (main dashboard)"
echo "   ├── vite.svg"
echo "   ├── assets/"
echo "   ├── PenPlanner/"
echo "   ├── Onboarding/"
echo "   ├── Equiply/"
echo "   └── Verktygslada/"
echo ""
echo "🌐 Visit: https://penplanner.se"