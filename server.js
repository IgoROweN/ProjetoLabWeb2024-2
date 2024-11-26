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

const init = async () => {
    try {
        await server.start();
        console.log(`Servidor rodando na porta ${server.info.uri}`);
    } catch (err) {
        console.error('Erro ao iniciar o servidor:', err.message);
        process.exit(1);
    }
};

process.on('unhandledRejection', (err) => {
    console.error('Erro não tratado:', err.message);
    process.exit(1);
});

init();

module.exports = server;
