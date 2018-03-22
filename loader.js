// const server = require('./config/server');
const serverSoap = require('./config-soap/server');
require('./config/database');
require('./config/routes')(serverSoap);
