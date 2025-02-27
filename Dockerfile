# Use the official Node.js image
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 for Next.js
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "start"]
