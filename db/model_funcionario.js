const mongoDB = require('mongoose')

module.exports = app => {
    const funcionario = new mongoDB.Schema({
        matricula: {
            type: Number,
            require: true
        },

        nome: {
            type: String,
            require: true
        },

        email: {
            type: String,
            require: true
        },

        dataDeCadastro: {
            type: Date,
            require: true
        }
    })

    const Funcionario = mongoDB.model('funcionario_model', funcionario)

    return { Funcionario }
}