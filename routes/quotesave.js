module.exports = function (app) {
    const controller = app.controllers.cotacao;
    app.route("/route")
            .post(controller.saveQuote)
            
}