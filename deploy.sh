#!/bin/bash

# ProMentor RUDN - Deployment Script
# Скрипт для развертывания приложения на сервере

set -e

echo "🚀 Starting ProMentor RUDN deployment..."

# Check if docker and docker-compose are installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Stop and remove old containers
echo "🛑 Stopping old containers..."
docker-compose down

# Remove old images (optional, comment out if not needed)
# echo "🗑️  Removing old images..."
# docker image prune -f

# Build new image
echo "🔨 Building new Docker image..."
docker-compose build --no-cache

# Start containers
echo "▶️  Starting containers..."
docker-compose up -d

# Wait for container to be ready
echo "⏳ Waiting for container to be ready..."
sleep 5

# Check if container is running
if [ "$(docker ps -q -f name=promentor-rudn)" ]; then
    echo "✅ ProMentor RUDN is now running!"
    echo "🌐 Visit: https://max.isayalot.ru"
    echo ""
    echo "📊 Container logs:"
    docker logs promentor-rudn --tail 20
else
    echo "❌ Container failed to start. Checking logs..."
    docker logs promentor-rudn
    exit 1
fi

# Show running containers
echo ""
echo "🐳 Running containers:"
docker ps -a | grep promentor

echo ""
echo "✅ Deployment completed successfully!"
