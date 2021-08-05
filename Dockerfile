FROM node:14

MAINTAINER Kaique Silva

COPY . /var/www

WORKDIR /var/www

RUN npm install

ENTRYPOINT npm start

EXPOSE 3000



