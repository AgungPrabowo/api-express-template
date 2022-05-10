FROM node:16-alpine3.11

# Install base packages
RUN apk update && apk add ca-certificates openssl && update-ca-certificates

# Set timezone
RUN apk add --no-cache tzdata
ENV TZ Asia/Jakarta

RUN mkdir /app
ADD . /app
WORKDIR /app

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait
RUN chmod +x /wait

RUN npm install
CMD /wait && npm start