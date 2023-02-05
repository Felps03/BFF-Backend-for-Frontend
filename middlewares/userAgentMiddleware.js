const userAgentMiddleware = (req, res, next) => {
  req.userAgent = req.get('User-Agent');
  next();
};

module.exports = userAgentMiddleware;
