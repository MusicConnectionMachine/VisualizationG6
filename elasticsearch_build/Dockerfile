FROM docker.elastic.co/elasticsearch/elasticsearch:5.2.2
USER root
COPY ./elastic_data /usr/share/elasticsearch/data
RUN chown -R elasticsearch:elasticsearch /usr/share/elasticsearch/data
USER elasticsearch