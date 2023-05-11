# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the project files to the container
COPY . .

# Build the Vue.js project
RUN npm run build

# Specify the command to run when the container starts
CMD ["npm", "run", "serve"]
