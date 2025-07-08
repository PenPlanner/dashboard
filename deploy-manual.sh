#!/bin/bash

# Manual FTP Upload Script using basic ftp command
echo "🚀 Manual FTP Deployment for PenPlanner..."

# Build first
echo "📦 Building project..."
npm run build

# Create FTP command file
cat > ftp_commands.txt << 'EOF'
binary
prompt off
cd penplanner.se/public_html
lcd dist
mput *
mkdir PenPlanner
cd PenPlanner
lcd PenPlanner
mput *
cd ..
mkdir Onboarding
cd Onboarding
lcd ../Onboarding
mput *
cd ..
mkdir Equiply
cd Equiply
lcd ../Equiply
mput *
cd ..
mkdir Verktygslada
cd Verktygslada
lcd ../Verktygslada
mput *
cd ..
lcd ../assets
mkdir assets
cd assets
mput *
quit
EOF

echo "📤 Connecting to FTP server..."
echo "When prompted, enter password: ${FTP_PASS:-Flight2025!}"

ftp -i ftpcluster.loopia.se < ftp_commands.txt

# Clean up
rm ftp_commands.txt

echo "✅ Manual deployment completed!"
echo "🌐 Visit: https://penplanner.se"