const server = require('./server.js');
const helmet = require('helmet');
const logger = require('morgan');
const PORT = process.env.PORT || 4000;
const accountRoute = require('./route/accounts');

server.use(helmet());
server.use(logger('dev'));

server.use('/api/accounts', accountRoute);
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});