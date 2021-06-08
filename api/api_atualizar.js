module.exports = app => {

    const Funcionario = app.db.model_funcionario.Funcionario

    const atualizar = async (req, res) => {
        try {
            const dados_atualizacao = req.body
            const update = await Funcionario.findOneAndUpdate({ nome: req.params.nome }, dados_atualizacao)

            if (update) {
                return res.status(200).send({ message: `Os dados do funcionário ${req.params.nome} foram atualizados com sucesso!`, data: { dados_atualizacao }})
            } else {
                return res.status(500).send({ message: `Funcionário '${req.params.nome}' não existente!` })
            }
        } catch (error) {
            console.log(error)

            return res.status(400).send({ message: `Não foi possível atualizar os dados do funcionário ${req.params.nome}` })
        }
    }

    return { atualizar }
}