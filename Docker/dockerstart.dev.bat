@echo off

echo Building Docker Image and Starting Docker Container in Development Mode!!

docker-compose -f docker-compose.dev.yml up --build

echo Stopping Docker Development Containers!!

docker-compose -f docker-compose.dev.yml down
