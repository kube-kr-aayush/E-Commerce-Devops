# Use stable Node version
FROM node:18-alpine

# App directory
WORKDIR /app

# Copy package files first (layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose backend port
EXPOSE 4000

# Run migrations FIRST, then start app
CMD ["sh", "-c", "node scripts/migrate.js && node app.js"]

