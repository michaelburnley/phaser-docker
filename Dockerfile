FROM mhart/alpine-node

WORKDIR /usr/src/app

# Bundle app source
COPY package*.json ./
COPY webpack.config.js ./
COPY ./src ./src
COPY .env* ./

RUN npm install

# Start the app
EXPOSE 8080
CMD ["npm", "start"]