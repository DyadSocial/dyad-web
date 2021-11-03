FROM node:alpine

LABEL version="1.0"
LABEL description="Dev Docker Image for Dyad's web frontend"
LABEL maintainer = ["vpham@nevada.unr.edu"]

WORKDIR /usr/app

# PM2 for NodeJS Daemon
RUN npm install --global pm2

# Copy package.json and package-lock.json
COPY ./package*.json ./

# Install
RUN npm install

# Copy rest of files
COPY ./ ./

# Build app
RUN npm run build

# Expose port
EXPOSE 1337

# Run container as non-root user included with Alpine base img
USER node

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]

