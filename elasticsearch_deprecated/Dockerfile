FROM docker.elastic.co/elasticsearch/elasticsearch:5.2.2

WORKDIR /usr/share/elasticsearch

USER root

# Startup Configurations
COPY composition-test-data.json /usr/local/bin
COPY startup.sh /usr/local/bin
USER elasticsearch
RUN /usr/local/bin/startup.sh

#Remove temp files
#USER root
#RUN rm /usr/local/bin/startup.sh
#RUN rm /usr/local/bin/composition-test-data.json

USER elasticsearch
# Install xpack - already installed. But this code line will be useful later
# RUN eval ${ES_JAVA_OPTS:-} elasticsearch-plugin install --batch x-pack


CMD /bin/bash bin/es-docker

EXPOSE 9200 9300