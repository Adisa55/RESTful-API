const NodeCache = require('node-cache');

const cache = new NodeCache();
module.exports = duration => (req, res, next) => {
   

    if (req.method !== 'GET') {
        console.error('It is not able to cache any method except GET!');
        return next();
    }
   
    const key = req.originalUrl;
    const cachingRes = cache.get(key)


    if (cachingRes) {
        console.log(`Caching ${key}`);
        res.send(cachingRes);
    }
    else {
        
        console.log(`Caching ${key}`);
        res.originalSend = res.send;
        res.send = body => {
            res.originalSend(body); 
            cache.set(key, body, duration);
        };
        
        next();
    }
};
