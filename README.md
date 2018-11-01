# aula-music
Simple Music Library and Player

## Getting started
Download [Docker Desktop](https://www.docker.com/products/docker-desktop) for Mac or Windows. [Docker Compose](https://docs.docker.com/compose) will be automatically installed. On Linux, make sure you have the latest version of [Compose](https://docs.docker.com/compose/install/).

Run in this directory:
```
docker-compose up
```
The backend api will be running at [http://localhost:8080](http://localhost:8080)

Try visiting [http://localhost:8080/status](http://localhost:8080/status) to test.

Any changes you make to inside the `server` directory will restart the backend server.

## Improvements
- Error handling middleware for express
- Class for handling Song Retrieval
- Class for handling MetaData Retrieval
- Tests
