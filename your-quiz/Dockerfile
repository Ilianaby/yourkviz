bashCopy code
# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN npm install
# RUN npm install

# Define the entry point for the container
CMD ["npm", "run", "dev"]
ENV NODE_ENV production