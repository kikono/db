
const redis = require('redis');
let option = {
    host:'127.0.0.1',
    port:'6379',
    db:14
};

const client = redis.createClient(option);

client.set(key,value);
client.get(key);

client.hgetall(key);
client.hset(key,file1,value);
client.hlen(key);
client.hdel(key);