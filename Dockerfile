FROM httpd:latest

# Copy configuration file for apache
COPY ./apache-httpd.conf /usr/local/apache2/conf/httpd.conf

# Expose apache
EXPOSE 80

# Copy the project files into place.
COPY public /usr/local/apache2/htdocs/public
COPY index.html /usr/local/apache2/htdocs/
