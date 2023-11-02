# Stage 1: Build the frontend
FROM node:latest as build-stage
WORKDIR /app

# Copy and install frontend dependencies
COPY frontend/package*.json /app/
RUN npm install

# Copy the frontend source code and build the static assets
COPY frontend/ /app/
RUN npm run build

# Stage 2: Build the backend
FROM node:latest as production-stage
WORKDIR /app

# Copy and install backend dependencies
COPY backend/package*.json /app/
RUN npm install

# Copy the backend source code
COPY backend/ /app/

# Copy the built frontend assets from the build-stage to the public directory of the backend
COPY --from=build-stage /app/build /app/public

# Expose the port the backend listens on
EXPOSE 3000

# Run the backend server
CMD ["node", "server.ts"]
