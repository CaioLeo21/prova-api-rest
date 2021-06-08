module.exports = app => {

    const Funcionario = app.db.model_funcionario.Funcionario

    const listar_pelo_nome = async (req, res) => {
        try{
            const listar_pelo_nome = await Funcionario.find({ nome: { $regex: req.params.nome, '$options': 'i' }}, { _id: 0, __v: 0 })

            return res.status(200).send({ message: `Todos os funcionários com '${req.params.nome}' foram listados com sucesso!`, data: { listar_pelo_nome }})
        } catch(error){
            console.log(error)

            return res.status(500).send({ message: `Não foi possível listar os funcionários com ${req.params.nome}!`})
        }
    }

    return { listar_pelo_nome }
}