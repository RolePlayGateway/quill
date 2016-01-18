var roleplaygateway = require('./lib/roleplaygateway');

roleplaygateway.start(function(err) {
  roleplaygateway.app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
});
