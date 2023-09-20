# Stage 1: Build the React application
FROM node:16-alpine as builder

WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker cache
COPY package.json package-lock.json ./

RUN npm install

# Copy the rest of the application files
COPY . ./

# Build the React app
RUN npm run build

# Stage 2: Create the production image with Nginx
FROM nginx

# Expose port 3000 (if necessary)
EXPOSE 3000

# Copy the Nginx configuration file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the built React app from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html
