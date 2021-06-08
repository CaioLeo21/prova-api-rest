module.exports = app => {
    const Funcionario = app.db.model_funcionario.Funcionario

    const listar = async (req, res) => {
        try {
            const dados = await Funcionario.find({}, { __v: 0, _id: 0}) 

            return res.status(200).send({ message: "Todos os funcionários cadastrados foram listados com sucesso!", data: { dados } })
        } catch (error) {
            console.log(error)

            return res.status(500).send({ message: "Erro ao listar todos os funcionários cadastrados!" })
        }
    }

    return { listar }
}