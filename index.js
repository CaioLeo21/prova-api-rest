const express = require('express')
const mongoDB = require('mongoose')
const consign = require('consign')
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc') 
const port = 3000
const app = express()

app.use(express.json())
app.mongoDB = mongoDB


const options = {
    definition: {
        info: {
            title: 'Swagger API Caio Leandro',
            version: '1.0.0'
        },
    },

    apis:['./routes.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

consign()
    .then('./db')
    .then('./api')
    .then('./routes.js')
    .into(app)


app.listen(port, () => {
    console.log(`Tudo certo na porta ${port}`)
})

module.exports = app