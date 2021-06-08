const express = require('express')
const mongoDB = require('mongoose')
const consign = require('consign')
const port = 3000
const app = express()

app.use(express.json())
app.mongoDB = mongoDB


consign()
    .then('./db')
    .then('./api')
    .then('./routes.js')
    .into(app)


app.listen(port, () => {
    console.log(`Tudo certo na porta ${port}`)
})

module.exports = app