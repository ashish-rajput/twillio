// logger middlerware
const logger = require('morgan');

// port to use in the server
const PORT = process.env.PORT || 8090;

module.exports = {
    PORT,
    logger: logger('dev'),
};