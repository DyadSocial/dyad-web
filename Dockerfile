FROM node:alpine

LABEL version="1.0"
LABEL description="Dev Docker Image for Dyad's web frontend"
LABEL maintainer = ["vpham@nevada.unr.edu"]

RUN mkdir -p /usr/app

WORKDIR /usr/app

ENV PORT 3000

# PM2 for NodeJS Daemon
RUN npm install --global pm2

# Copy package.json and package-lock.json
COPY dyad-web/package*.json /usr/app

# Install
RUN npm install

# Copy source files
COPY dyad-web/ /usr/app

# Build app
RUN npm run build

# Expose port
EXPOSE 3000

# Run container as non-root user included with Alpine base img
USER node

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]

