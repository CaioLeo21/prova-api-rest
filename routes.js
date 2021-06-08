module.exports = app => {
    /**
     * @swagger
     * definitions: 
     *  Funcionario: 
     *      type: Objeto
     *      propriedades:
     *          Matrícula: 
     *              type: Number
     *              description: Matrícula do funcionário
     *              exemplo: 123
     *          Nome: 
     *              type: String
     *              description: Nome do funcionário
     *              exemplo: "Caio"
     *          Email: 
     *              type: String
     *              description: Email do funcionário
     *              exemplo: "caio@souunit.com.br"
     *          Data do Cadastro: 
     *              type: Date
     *              description: Data de cadastro do funcionário
     *              exemplo: "2021-06-07"              
     */

    /**
     * @swagger
     * /v1/funcionario:
     *  post: 
     *      summary: Criação de funcionário
     *      description: Criação de funcionário no banco de dados
     *      requestBody:
     *        content:
     *         application/json:
     *           schema:
     *             $ref: '#definitions/Funcionario'
     *  responses:
     *    200:
     *     description: Funcionário criado com sucesso!
     *    500:
     *     description: Erro ao criar funcionário!
     */
    
     /**
        * @swagger
        * /v1/funcionario:
        *   get:
        *    summary: Listagem de funcionários
        *    description: Listagem de funcionários cadastrados no banco de dados
        *    consumes: 
        *       application/json
        * responses:
        *    200:
        *     description: Funcionários listados com sucesso!
        *    500:
        *     description: Erro ao listar funcionários!
    */

    app.route('/v1/funcionario')
        .post(app.api.api_cadastro.cadastro)
        .get(app.api.api_listar.listar)

    
    /**
     * @swagger
     * /v1/funcionario/:nome:
     *  put: 
     *      summary: Atualização de funcionário
     *      description: Atualização dos dados de um funcionário no banco de dados
     *      requestBody:
     *        content:
     *         application/json:
     *           schema:
     *             $ref: '#definitions/Funcionario'
     *  responses:
     *    200:
     *     description: Funcionário atualizado com sucesso!
     *    500:
     *     description: Erro ao atualizar funcionário!
     */
    
     /**
        * @swagger
        * /v1/funcionario/:nome:
        *   delete:
        *    summary: Exclusão de funcionário
        *    description: Exclusão de funcionário cadastrado no banco de dados
        *    consumes: 
        *       application/json
        * responses:
        *    200:
        *     description: Funcionário excluído com sucesso!
        *    500:
        *     description: Erro ao excluir funcionário!
    */

     /**
        * @swagger
        * /v1/funcionario/:nome:
        *   get:
        *    summary: Listagem de funcionários pelo nome
        *    description: Listagem de funcionários cadastrados no banco de dados pelo nome
        *    consumes: 
        *       application/json
        * responses:
        *    200:
        *     description: Funcionários listados com sucesso!
        *    500:
        *     description: Erro ao listar funcionários!
    */
    
    app.route('/v1/funcionario/:nome')
        .get(app.api.api_listar_nome.listar_pelo_nome)
        .put(app.api.api_atualizar.atualizar)
        .delete(app.api.api_deletar.deletar)
}