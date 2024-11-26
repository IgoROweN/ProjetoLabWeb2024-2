const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  nome: { type: String, required: true },
  descricao: { type: String },
  categoria: { type: String, required: true },
  marca: { type: String },
  preco: { type: Number, required: true },
  quantidadeEstoque: { type: Number },
  codigoBarras: { type: String, unique: true },
  dimensoes: {
    altura: { type: Number },
    largura: { type: Number },
    profundidade: { type: Number },
    unidadeMedida: { type: String },
  },
  peso: {
    valor: { type: Number },
    unidadeMedida: { type: String },
  },
  status: { type: String, enum: ['ativo', 'inativo'], default: 'ativo' },
  dataCadastro: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Produto', produtoSchema);
