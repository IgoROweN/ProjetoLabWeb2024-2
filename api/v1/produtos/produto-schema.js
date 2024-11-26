const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    id: { type: String, required: true },
    nome: { type: String, required: true },
    descricao: { type: String },
    categoria: { type: String },
    marca: { type: String },
    preco: { type: Number, required: true },
    quantidadeEstoque: { type: Number, default: 0 },
    codigoBarras: { type: String },
    dimensoes: {
        altura: { type: Number },
        largura: { type: Number },
        profundidade: { type: Number },
        unidadeMedida: { type: String }
    },
    peso: {
        valor: { type: Number },
        unidadeMedida: { type: String }
    },
    status: { type: String, enum: ['ativo', 'inativo'], default: 'ativo' },
    dataCadastro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Produto', produtoSchema);
