const mongoose = require('mongoose');
const envConfig = require('./envs-config'); // Importa as variáveis de ambiente

const connectDB = async () => {
    try {
        // Conecta ao MongoDB usando a URI fornecida nas variáveis de ambiente
        await mongoose.connect(envConfig.database.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexão ao MongoDB estabelecida com sucesso!');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err.message);
        process.exit(1); // Encerra o processo em caso de erro
    }
};

module.exports = connectDB;
