const ProdutoModel = require('./produto-model.js');

const ProdutoBusiness = {
  cadastrar: (produto) => ProdutoModel.create(produto),
  alterar: (id, data) => ProdutoModel.update(id, data),
  remover: (id) => ProdutoModel.delete(id),
  buscarPorId: (id) => ProdutoModel.findById(id),
  buscar: (filtros) => ProdutoModel.find(filtros),
};

module.exports = ProdutoBusiness;
