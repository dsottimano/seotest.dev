class utils {
    static  googleCacheUrl(req) {
        return 'https://' + req.get('host') + req.originalUrl
        
    }
}

module.exports =utils;