FROM node:10.16.3

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm", "start"]