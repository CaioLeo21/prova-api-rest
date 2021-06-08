module.exports = app => {
    app.route('/v1/funcionario')
        .post(app.api.api_cadastro.cadastro)
        .get(app.api.api_listar.listar)
    
    app.route('/v1/funcionario/:nome')
        .get(app.api.api_listar_nome.listar_pelo_nome)
        .put(app.api.api_atualizar.atualizar)
        .delete(app.api.api_deletar.deletar)
}