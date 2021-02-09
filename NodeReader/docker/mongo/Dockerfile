FROM mongo
COPY thirty2.bson /home/preload.bson

CMD mongod --fork --logpath /var/log/mongodb.log; \
    mongorestore -d tweets -c thirty2 /home/preload.bson; \
    mongod --shutdown; \
    docker-entrypoint.sh mongod
