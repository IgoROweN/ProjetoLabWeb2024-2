const alunoRoutes = require('../API/V1/alunos/aluno-routes');
const produtoRoutes = require('../api/v1/produtos/produto-routes');

const routes = [
    ...alunoRoutes,
    ...produtoRoutes
];

module.exports = routes;
