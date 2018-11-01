FROM node:alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Copy whole project
COPY . /app

RUN npm install -g nodemon
RUN npm i . --production

EXPOSE $PORT

CMD ["npm", "start"]
