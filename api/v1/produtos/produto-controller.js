const Produto = require('./produto-schema');

// Cadastrar Produto
exports.cadastrar = async (request, h) => {
    try {
        const produto = new Produto(request.payload);
        const result = await produto.save();
        return h.response(result).code(201);
    } catch (err) {
        return h.response({ error: err.message }).code(500);
    }
};

// Buscar Produto por ID
exports.buscarPorId = async (request, h) => {
    try {
        const produto = await Produto.findById(request.params.id);
        if (!produto) {
            return h.response({ message: 'Produto não encontrado' }).code(404);
        }
        return h.response(produto).code(200);
    } catch (err) {
        return h.response({ error: err.message }).code(500);
    }
};

// Atualizar Produto
exports.alterar = async (request, h) => {
    try {
        const produto = await Produto.findByIdAndUpdate(
            request.params.id,
            request.payload,
            { new: true }
        );
        if (!produto) {
            return h.response({ message: 'Produto não encontrado' }).code(404);
        }
        return h.response(produto).code(200);
    } catch (err) {
        return h.response({ error: err.message }).code(500);
    }
};

// Excluir Produto
exports.remover = async (request, h) => {
    try {
        const produto = await Produto.findByIdAndDelete(request.params.id);
        if (!produto) {
            return h.response({ message: 'Produto não encontrado' }).code(404);
        }
        return h.response({ message: 'Produto removido com sucesso' }).code(200);
    } catch (err) {
        return h.response({ error: err.message }).code(500);
    }
};
