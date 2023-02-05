const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.use(helmet.xssFilter({ setOnOldIE: true }));
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.noSniff());

const userAgentMiddleware = (req, res, next) => {
  req.userAgent = req.get('User-Agent');
  next();
};

app.use(userAgentMiddleware);

app.get('/api/data', (req, res) => {
  if (req.userAgent.includes('Mobile')) {
    return res.status(200).json({ message: 'Mobile device detected' });
  }
  if (req.userAgent.includes('Chrome')) {
    return res.status(200).json({ message: 'Web browser detected' });
  }
  return res.status(200).json({ message: 'Other device detected' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
