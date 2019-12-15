FROM node:10

RUN mkdir /usr/app
WORKDIR /usr/app

COPY . .

WORKDIR /usr/app/apps/api

RUN npm install

EXPOSE 3333

CMD [ "npm", "run", "dev" ]