FROM node:14

MAINTAINER Kaique Silva

COPY . /var/www

WORKDIR /var/www

RUN npm install

EXPOSE 3000

ENTRYPOINT npm start

