const mongoDB = require('mongoose')

mongoDB.connect('mongodb://localhost/backendDB', { useNewUrlParser: true , useFindAndModify: false, useUnifiedTopology: true })
    .then(() => {
        console.log("backendDB conectado com sucesso!")
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = mongoDB