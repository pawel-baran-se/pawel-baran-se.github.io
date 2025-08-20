# Use an official Node.js image as the build environment
FROM node:20-alpine AS build

RUN apk update && apk upgrade
WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

# Build the React app
RUN npm run build

# Use an official Nginx image to serve the build
FROM nginx:alpine


COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
