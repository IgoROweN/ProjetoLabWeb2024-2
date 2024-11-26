const ProdutoBusiness = require('./produto-business');

const ProdutoController = {
  cadastrar: async (req, res) => {
    try {
      const produto = await ProdutoBusiness.cadastrar(req.body);
      res.status(201).send(produto);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  alterar: async (req, res) => {
    try {
      const produto = await ProdutoBusiness.alterar(req.params.id, req.body);
      res.send(produto);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  remover: async (req, res) => {
    try {
      const produto = await ProdutoBusiness.remover(req.params.id);
      res.send({ message: 'Produto removido com sucesso' });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  buscarPorId: async (req, res) => {
    try {
      const produto = await ProdutoBusiness.buscarPorId(req.params.id);
      res.send(produto);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  },
  buscar: async (req, res) => {
    try {
      const filtros = req.query;
      const produtos = await ProdutoBusiness.buscar(filtros);
      res.send(produtos);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
};

module.exports = ProdutoController;
