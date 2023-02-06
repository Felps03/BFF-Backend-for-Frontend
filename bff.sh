#!/bin/bash

echo "Building Docker image with name 'bff'"
docker build -t bff .

echo "Starting Docker container from image 'bff'"
docker run -p 3000:3000 -d bff

echo "Docker container started successfully and accessible at http://localhost:3000"