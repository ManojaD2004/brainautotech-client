#!/bin/bash

echo "Building Docker Image and Starting Docker Container in Development Mode!!"

docker compose -f docker-compose.dev.yml up --build

wait

echo "Stopping and Docker Development Containers!!"

docker compose -f docker-compose.dev.yml down