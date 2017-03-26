# Building custom elasticsearch image

The data dir of Elasticseach shoul be mounted externally in a persistend environment! This setup is only for early development.

To build the custom image, the `#` before **build** in `docker-compose.yml` has to be removed. Run `docker-compose build --no-cache`

Then the image can be uploaded with `docker login` and `docker push musicconnectionmachine/elasticsearch-testdata:custom-tag`