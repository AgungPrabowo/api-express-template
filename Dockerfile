FROM node:16-alpine3.11

RUN apk update && apk add ca-certificates openssl && update-ca-certificates

RUN mkdir /app
ADD . /app
WORKDIR /app

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait
RUN chmod +x /wait

RUN npm install
CMD /wait && npm start