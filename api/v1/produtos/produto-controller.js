const Produto = require('./produto-schema');  
const mongoose = require('mongoose');

const ProdutoController = {
    buscar: async (request, h) => {
        try {
            const produtos = await Produto.find();  
            return h.response(produtos).code(200);
        } catch (err) {
            console.error(err);
            return h.response({ message: 'Erro ao buscar produtos' }).code(500);
        }
    },
    
    buscarPorId: async (request, h) => {
        const { id } = request.params;
        try {
            const produto = await Produto.findById(id);  
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
            console.error('Erro ao cadastrar produto:', err); 
            return h.response({ message: 'Erro ao cadastrar produto' }).code(500);
        }
    },

    alterar: async (request, h) => {
        const { id } = request.params;
        const { nome, descricao, categoria, marca, preco, quantidadeEstoque, codigoBarras, dimensoes, peso, status } = request.payload;
        
        try {
            const produto = await Produto.findById(id);  
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

            await produto.save();  
            return h.response({ message: 'Produto alterado com sucesso!' }).code(200);
        } catch (err) {
            console.error(err);
            return h.response({ message: 'Erro ao alterar produto' }).code(500);
        }
    },

    remover: async (request, h) => {
        const { id } = request.params;  
        try {
            const produto = await Produto.findByIdAndDelete(id); 
            if (!produto) {
                return h.response({ message: 'Produto não encontrado' }).code(404);  
            }
            return h.response({ message: 'Produto excluído com sucesso' }).code(200);
        } catch (error) {
            console.error(error);
            return h.response({ message: 'Erro ao excluir o produto' }).code(500);  
        }
    },

    buscarComFiltros: async (request, h) => {
        const { categoria, nome } = request.query;  
        try {
            let query = {};  
    
            if (categoria) {
                query.categoria = categoria; 
            }
            if (nome) {
                query.nome = { $regex: nome, $options: 'i' }; 
            }
    
            const produtos = await Produto.find(query); 
            return h.response(produtos).code(200);
        } catch (err) {
            console.error(err);
            return h.response({ message: 'Erro ao buscar produtos com filtros' }).code(500);
        }
    },

};

module.exports = ProdutoController;
