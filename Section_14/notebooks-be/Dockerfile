FROM node:22-alpine AS development
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
CMD [ "npm", "run", "dev" ]

FROM node:22-alpine AS prod-deps
WORKDIR /app
COPY package*.json .
RUN npm ci --only=production
COPY . .
CMD [ "npm", "run", "dev" ]

FROM gcr.io/distroless/nodejs22 AS production
WORKDIR /app
COPY --from=prod-deps /app/node_modules node_modules
COPY src src
CMD ["src/server.js" ]
# we don't use "node" at the beginning of CMD since it's set as default entrypoint for gcr.io/distroless/nodejs22 image