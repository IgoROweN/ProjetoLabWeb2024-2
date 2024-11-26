const ProdutoController = require('./produto-controller');

const routes = [
    {
        method: 'POST',
        path: '/produtos',
        handler: ProdutoController.cadastrar,
    },
    {
        method: 'PUT',
        path: '/produtos/{id}',
        handler: ProdutoController.alterar,
    },
    {
        method: 'DELETE',
        path: '/produtos/{id}',
        handler: ProdutoController.remover,
    },
    {
        method: 'GET',
        path: '/produtos/{id}',
        handler: ProdutoController.buscarPorId,
    },
    {
        method: 'GET',
        path: '/produtos',
        handler: ProdutoController.buscar,
    },
];

module.exports = routes;
