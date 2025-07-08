#!/bin/bash

# PenPlanner Dashboard - SAFE Deployment Script (NO DELETION!)
echo "🚀 Safely deploying updated PenPlanner Dashboard..."

# FTP Server Details (Default values)
FTP_HOST="${FTP_HOST:-ftpcluster.loopia.se}"
FTP_USER="${FTP_USER:-PenPlanner}"
FTP_PASS="${FTP_PASS:-Flight2025!}"

# Build the project
echo "📦 Building project..."
npm run build

# Create SAFE deployment script - ONLY OVERWRITES, NO DELETION
cat > safe_upload_script.txt << EOF
set ftp:ssl-allow no
open ftp://$FTP_USER:$FTP_PASS@$FTP_HOST

# Navigate to the correct directory
cd penplanner.se/public_html

# Upload ONLY main dashboard files (overwrite existing)
lcd dist
put index.html
put vite.svg

# Upload ONLY assets files (overwrite existing)
cd assets
lcd assets
mput *
cd ..

quit
EOF

# Deploy with lftp
if command -v lftp &> /dev/null; then
    echo "📤 Safely uploading ONLY updated files (no deletion)..."
    lftp -f safe_upload_script.txt
    echo "✅ Safe deployment completed!"
else
    echo "❌ lftp not found. Please install it first:"
    echo "brew install lftp"
    exit 1
fi

# Clean up
rm safe_upload_script.txt

echo "🎉 Dashboard safely updated with new title!"
echo "🔒 No existing folders or files were deleted"
echo "📝 Only main dashboard files were overwritten"
echo "🌐 Visit: https://penplanner.se"