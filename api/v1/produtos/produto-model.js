const Produto = require('./produto-schema');

const ProdutoModel = {
  create: (data) => Produto.create(data),
  update: (id, data) => Produto.findOneAndUpdate({ id }, data, { new: true }),
  delete: (id) => Produto.findOneAndUpdate({ id }, { status: 'inativo' }, { new: true }),
  findById: (id) => Produto.findOne({ id }),
  find: (filters) => Produto.find(filters),
};

module.exports = ProdutoModel;
