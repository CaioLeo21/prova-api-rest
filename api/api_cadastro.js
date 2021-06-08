module.exports = app => {

    const Funcionario = app.db.model_funcionario.Funcionario

    const cadastro = async (req, res) => {
        try {
            const dados_cadastro = req.body
            await Funcionario.create(dados_cadastro) //INSERT()

            return res.status(201).send({ message: "Funcionário cadastrado com sucesso!" , data: { dados_cadastro } })
            
        } catch (error) {
            console.log(error)

            return res.status(500).send( { message: "Erro ao cadastrar funcionário!" } )
        }
    }

    return { cadastro }
}