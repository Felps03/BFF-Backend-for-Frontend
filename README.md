# BFF (Backend for Frontend)

A simple project using the BFF (Backend for Frontend) architecture pattern to separate server and client responsibilities.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

You'll need Node.js and npm installed on your machine.

## Installing

Clone the repository and install the dependencies.

```
git clone https://github.com/felipe-santos/bff.git
cd bff
npm install
```

## Running the project

Start the project with the following command:

```
npm start
```

## Docker Image

Build the Docker image with the following command:

```
docker build -t bff .
```

## Running in a Docker Container


Start a Docker container with the following command:

```
docker run -p 3000:3000 -d bff

``` 

This will start the BFF service in a Docker container and map the host port 3000 to the container port 3000. You can access the service at http://localhost:3000/api/data.


### Built With

Node.js
Express
License
This project is licensed under the ISC license.

### Author

Felipe Santos
