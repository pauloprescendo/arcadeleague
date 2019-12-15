FROM node:10

WORKDIR /usr/project/api

COPY apps/api/package*.json ./

RUN npm install

COPY apps/api ./

EXPOSE 3333

CMD [ "npm", "run", "dev" ]