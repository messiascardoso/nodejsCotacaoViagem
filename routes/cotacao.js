module.exports = function (app) {
    const controller = app.controllers.cotacao;
    app.route(/^\/quote\/(\w+)\/(\w+)?$/)
            .get(controller.getCotacao)
            
}
