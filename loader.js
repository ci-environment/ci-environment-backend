// const server = require('./config/server');
const ServerClass = require('./config-oo/server');
const RoutesClass = require('./config/routes');

const server = new ServerClass(4000);

require('./config/database');
const routes = new RoutesClass(server.getServer());
// require('./config/routes')(server.getServer());
