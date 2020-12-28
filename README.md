# kubernetes-backbone

## MongoDB Replica Set

```
$ docker network create mongo-cluster
```

```
docker run \
-p 30001:27017 \
--name mongo1 \
--net mongo-cluster \
mongo mongod --replSet my-mongo-set
```

```
docker run \
-p 30002:27017 \
--name mongo2 \
--net mongo-cluster \
mongo mongod --replSet my-mongo-set
```

```
docker run \
-p 30003:27017 \
--name mongo3 \
--net mongo-cluster \
mongo mongod --replSet my-mongo-set
```