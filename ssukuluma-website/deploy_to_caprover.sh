#!/usr/bin/env bash

# Ssukuluma Solutions CapRover Deployment Script
# This builds the React/Vite frontend and deploys it to CapRover

set -e

# Configuration - Update these for your setup
CAPROVER_NAME="aidoc-server"           # Your CapRover server name
CAPROVER_APP="ssukuluma"               # CapRover app name

echo ""
echo "🚀 Ssukuluma Solutions CapRover Deployment"
echo "==========================================="
echo ""

# Step 1: Install dependencies and build React/Vite project
echo "📦 Installing dependencies..."
npm install || { echo "❌ npm install failed"; exit 1; }

echo "📦 Building React frontend..."
npm run build || { echo "❌ Frontend build failed"; exit 1; }

# Step 2: Navigate to dist folder
DIST_DIR="dist"
cd "$DIST_DIR" || { echo "❌ Failed to enter $DIST_DIR"; exit 1; }

# Step 3: Write captain-definition
echo "📝 Creating captain-definition..."
cat <<EOF > captain-definition
{
  "schemaVersion": 2,
  "dockerfilePath": "./Dockerfile"
}
EOF

# Step 4: Write Dockerfile
echo "📝 Creating Dockerfile..."
cat <<EOF > Dockerfile
FROM nginx:stable-alpine
COPY . /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
EOF

# Step 5: Write nginx.conf for static site
echo "📝 Creating nginx.conf..."
cat <<EOF > nginx.conf
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html index.htm;

    # React SPA - serve index.html for all routes
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Static file caching
    location ~* \.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|svg|webp)$ {
        expires 6M;
        access_log off;
        add_header Cache-Control "public";
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
}
EOF

# Step 6: Create deployment tarball
echo "📦 Packaging into ssukuluma-frontend.tar.gz..."
tar -czf ~/ssukuluma-frontend.tar.gz ./* || { echo "❌ Failed to create tar.gz"; exit 1; }

echo "✅ Tarball created at: ~/ssukuluma-frontend.tar.gz"
echo ""

# Step 7: Deploy to CapRover
echo "🚀 Deploying to CapRover..."
caprover deploy \
  --caproverName "$CAPROVER_NAME" \
  --caproverApp "$CAPROVER_APP" \
  --tarFile ~/ssukuluma-frontend.tar.gz

echo ""
echo "✅ Deployment complete!"
echo "🌐 Visit: https://ssukulumasolutions.com"
echo ""

