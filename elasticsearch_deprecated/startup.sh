#!/bin/bash

# This File is executed one at build time from use elasticsearch

# The normal entrypoint of elasticsearch - thus will start the server
bin/es-docker &

# Wait for the server to come up
while ! curl http://127.0.0.1:9200; do sleep 3; done;

# Set the read_music role
curl -XPOST -u elastic:changeme 'localhost:9200/_xpack/security/role/read_music' -d '
	{ "indices" : 
		[ 
			{ 
				"names" : [ "music*" ], 
				"privileges" : [ "read" ] 
			} 
		]
	}'

# Load samle data
curl -XPOST -u elastic:changeme 'localhost:9200/music/composition/_bulk?refresh' --data-binary "@/usr/local/bin/composition-test-data.json" -H 'Content-Type: application/json'
