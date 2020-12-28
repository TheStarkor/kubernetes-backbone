# kubernetes-backbone

쿠버네티스를 사용하여 user, post 그리고 inference로 구성된 마이크로서비스를 제공하기 위한 backbone입니다.

## About
- USER API(nodejs) : port 8000
- POST API(nodejs) : port 9000
- Inference API(flask) : port 5000

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