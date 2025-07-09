FROM nginx:alpine

# Clean default nginx html files
RUN rm -rf /usr/share/nginx/html/*

# Copy all your portfolio files into nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
