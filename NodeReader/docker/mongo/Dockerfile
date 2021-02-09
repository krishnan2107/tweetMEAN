FROM mongo
COPY thirty2.bson /home/preload.bson
COPY initmongoadmin.js /home/initmongoadmin.js
COPY initMongo.js /home/initMongo.js
 

CMD mongod --fork --logpath /var/log/mongodb.log; \
    mongorestore -d tweets -c thirty2 /home/preload.bson; \
    mongo admin /home/initmongoadmin.js; \
    mongo tweets /home/initMongo.js; \
    mongod --shutdown; \
    docker-entrypoint.sh mongod
