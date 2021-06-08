module.exports = app => {
    const Funcionario = app.db.model_funcionario.Funcionario

    const deletar = async (req, res) => {
        try{
            const exclusao = await Funcionario.findOneAndDelete({ nome: req.params.nome })

            if(exclusao){
                return res.status(200).send({ message: `O funcionário '${req.params.nome}' foi excluído com sucesso!`, data: { exclusao }})
            }else{
                return res.status(400).send({ message: `Funcionário '${req.params.nome}' não existente!`})
            }

        } catch (error){
            console.log(error)

            return res.status(500).send({ message: `Não foi possível excluir o funcionário '${req.params.nome}'!`})
        }
    }

    return { deletar }
}