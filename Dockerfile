FROM httpd:latest

# Copy configuration file for apache
COPY ./apache-httpd.conf /usr/local/apache2/conf/httpd.conf

# Expose apache
EXPOSE 80

# Copy the project files into place.
COPY public /usr/local/apache2/htdocs

# Copy the widgets
COPY VisualizationG5/express/react/ /usr/local/apache2/htdocs/widgets/
COPY VisualizationG5/iframe_widgets/documentation/widgets.js /usr/local/apache2/htdocs/widgets/
