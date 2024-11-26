const Produto = require('./produto-schema');  // Supondo que você tenha um modelo de produto configurado com o Mongoose ou Sequelize
const mongoose = require('mongoose');

const ProdutoController = {
    buscar: async (request, h) => {
        try {
            const produtos = await Produto.find();  // Exemplo de como buscar todos os produtos, adaptando ao seu modelo
            return h.response(produtos).code(200);
        } catch (err) {
            console.error(err);
            return h.response({ message: 'Erro ao buscar produtos' }).code(500);
        }
    },
    
    buscarPorId: async (request, h) => {
        const { id } = request.params;
        try {
            const produto = await Produto.findById(id);  // Supondo que use MongoDB com Mongoose
            if (!produto) {
                return h.response({ message: 'Produto não encontrado' }).code(404);
            }
            return h.response(produto).code(200);
        } catch (err) {
            console.error(err);
            return h.response({ message: 'Erro ao buscar produto' }).code(500);
        }
    },

    cadastrar: async (request, h) => {
        const { nome, descricao, categoria, marca, preco, quantidadeEstoque, codigoBarras, dimensoes, peso, status } = request.payload;
        
        try {
            const produto = new Produto({
                id: new mongoose.Types.ObjectId().toHexString(),
                nome,
                descricao,
                categoria,
                marca,
                preco,
                quantidadeEstoque,
                codigoBarras,
                dimensoes,
                peso,
                status
            });
    
            await produto.save(); // Salva o produto no banco de dados
            return h.response({ message: 'Produto cadastrado com sucesso!' }).code(201);
        } catch (err) {
            console.error('Erro ao cadastrar produto:', err); // Adicione o erro completo no log
            return h.response({ message: 'Erro ao cadastrar produto' }).code(500);
        }
    },

    alterar: async (request, h) => {
        const { id } = request.params;
        const { nome, descricao, categoria, marca, preco, quantidadeEstoque, codigoBarras, dimensoes, peso, status } = request.payload;
        
        try {
            const produto = await Produto.findById(id);  // Busca o produto pelo ID
            if (!produto) {
                return h.response({ message: 'Produto não encontrado' }).code(404);
            }

            produto.nome = nome || produto.nome;
            produto.descricao = descricao || produto.descricao;
            produto.categoria = categoria || produto.categoria;
            produto.marca = marca || produto.marca;
            produto.preco = preco || produto.preco;
            produto.quantidadeEstoque = quantidadeEstoque || produto.quantidadeEstoque;
            produto.codigoBarras = codigoBarras || produto.codigoBarras;
            produto.dimensoes = dimensoes || produto.dimensoes;
            produto.peso = peso || produto.peso;
            produto.status = status || produto.status;

            await produto.save();  // Salva as alterações no banco de dados
            return h.response({ message: 'Produto alterado com sucesso!' }).code(200);
        } catch (err) {
            console.error(err);
            return h.response({ message: 'Erro ao alterar produto' }).code(500);
        }
    },

    remover: async (request, h) => {
        const { id } = request.params;
        try {
            const produto = await Produto.findById(id);  // Busca o produto pelo ID
            if (!produto) {
                return h.response({ message: 'Produto não encontrado' }).code(404);
            }

            await produto.remove();  // Remove o produto do banco de dados
            return h.response({ message: 'Produto removido com sucesso!' }).code(200);
        } catch (err) {
            console.error(err);
            return h.response({ message: 'Erro ao remover produto' }).code(500);
        }
    }
};

module.exports = ProdutoController;
