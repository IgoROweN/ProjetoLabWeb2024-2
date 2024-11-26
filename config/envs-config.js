'use strict';

const dotenv = require('dotenv').config();

// Configurações gerais
const all = {
    basePath: '/cms/v1',

    env: process.env.ENVIRONMENT,
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 5000,

    database: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/labwebdb' // URI completa do MongoDB
    }
};

module.exports = all;
