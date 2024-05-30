# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build the React app
RUN npm run build

# Install a simple HTTP server to serve the built files
RUN npm install -g serve

# Start the server
CMD ["serve", "-s", "build"]

# Expose port
EXPOSE 3000
