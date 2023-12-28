# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /

# Copy the application files into the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that your Next.js app will run on
EXPOSE 3000

# Define the command to start your Next.js app 
CMD ["npm", "start"]
