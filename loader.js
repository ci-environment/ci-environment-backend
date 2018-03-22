// const server = require('./config/server');
const ServerClass = require('./config-soap/server');
const RoutesClass = require('./config/routes');

let server = new ServerClass(4000);

require('./config/database');
let routes = new RoutesClass(server.getServer());
// require('./config/routes')(server.getServer());
