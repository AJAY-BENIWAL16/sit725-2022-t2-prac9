# FROM  node:16-alpine
# ENV NODE_ENV = production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 3000

# RUN chown -R node /usr/src/app
# USER node

# CMD ["npm" "start"]


# FROM node

# WORKDIR /app

# EXPOSE 8080

# RUN npm install

# CMD ["npm","start"]

FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
EXPOSE 3000
RUN yarn install --production
CMD ["node", "/app/src/index.js"]