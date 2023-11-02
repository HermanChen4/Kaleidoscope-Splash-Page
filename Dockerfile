# Multi-stage build: First stage to build the frontend
FROM node:latest as build-stage
WORKDIR /app

# Install frontend dependencies
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

# Build frontend static files
COPY frontend/ ./frontend/
RUN cd frontend && npm run build

# Second stage to set up the Express server
FROM node:latest
WORKDIR /app

# Install backend dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Copy backend code
COPY backend/ ./backend/

# Copy built frontend assets
COPY --from=build-stage /app/frontend/build ./backend/public

# Expose the port the backend listens on
EXPOSE 3000

# Start the Express server
CMD ["npm", "run", "start-express", "--prefix", "backend"]
