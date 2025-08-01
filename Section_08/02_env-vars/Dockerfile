FROM node:22-alpine

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

ENV PORT=5000
ENV APP_NAME="APP NAME FROM ENV VAR"

CMD [ "node", "src/index.js" ]