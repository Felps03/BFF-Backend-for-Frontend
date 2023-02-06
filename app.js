const express = require('express');
const helmet = require('helmet');
const userAgentMiddleware = require('./middlewares/userAgentMiddleware');

const app = express();

app.use(helmet());

app.use(helmet.xssFilter({ setOnOldIE: true }));
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.noSniff());

app.use(userAgentMiddleware);

const apiDataRouter = require('./routes/apiDataRouter');

app.use('/api', apiDataRouter);

module.exports = app;
