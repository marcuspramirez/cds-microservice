FROM node:latest

WORKDIR /usr/src/www

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5280

CMD ["npm", "run", "start"]