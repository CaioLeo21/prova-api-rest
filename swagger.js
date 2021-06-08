
const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ["./api/api_cadastro.js"]

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index.js')
})

