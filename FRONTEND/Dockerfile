# Stage 1: Build the React application
# This stage uses Node.js to install dependencies and create the static files.
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ----------------------------------------------------------

# Stage 2: Serve the application with Nginx
# This stage uses a tiny, secure Nginx web server to serve the files.
FROM nginx:1.25-alpine
# Copy the built static files from the 'build' stage into the Nginx web directory
COPY --from=build /app/dist /usr/share/nginx/html
# Tell AWS the container will be listening on port 80
EXPOSE 80
# The command to start the Nginx server
CMD ["nginx", "-g", "daemon off;"]