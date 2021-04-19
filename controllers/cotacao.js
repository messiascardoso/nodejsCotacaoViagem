module.exports = function(app) {
    const controller = {};
    
    controller.getCotacao = function(req, res) {
        console.log('controller.getCotacao')
    }
    
    return controller; 
}