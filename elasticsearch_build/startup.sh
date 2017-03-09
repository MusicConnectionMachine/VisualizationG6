#!/bin/bash

# No permission for this..
if [[ -e /usr/share/elasticsearch/data/initialized ]]
then
	exit 0
fi

while ! curl http://127.0.0.1:9200; do sleep 1; done;

curl -XPOST -u elastic:changeme 'localhost:9200/_xpack/security/role/read_music' -d '{ "indices" : [ { "names" : [ "music*" ], "privileges" : [ "read" ] } ] }'

curl -XPOST -u elastic:changeme 'localhost:9200/music/composition/_bulk?pretty&refresh' --data-binary "@/usr/local/bin/composition-test-data.json" -H 'Content-Type: application/json'

touch /usr/local/bin/initialized