FROM ubuntu:20.04  
# Install Node.js and npm
RUN apt-get update && apt-get install -y nodejs npm

# Set the working directory
WORKDIR /app

# Copy your application source code to the Docker image
COPY . /app

# Install your application's dependencies
RUN npm install

# Start the application
CMD ["npm", "start"]
