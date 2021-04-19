module.exports = function (app) {
    const controller = app.controllers.cotacao;
    app.route('/cotacao')
            .get(controller.getCotacao)
            
}
