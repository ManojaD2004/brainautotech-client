@echo off

echo Building Docker Image and Starting Docker Container in Production Build Mode!!

docker-compose up --build

echo Stopping and Removing Docker Production Container!!

docker-compose down
