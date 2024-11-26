const Hapi = require("@hapi/hapi");
const routes = require("./config/routes");
const config = require('./config/envs-config');
const connectDB = require('./config/db');

// Conecta ao banco de dados
connectDB();

const server = Hapi.server({
    port: config.port,
    host: config.host
});

// Mapeia as rotas no servidor
routes.forEach((path) => server.route(path));

module.exports = server;
