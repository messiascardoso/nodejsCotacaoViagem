module.exports = function(app) {
    const controller = {};
    var fs = require('fs').promises;
    const pathFile = __dirname.replace('controllers', '')+'/routes.csv'
    
    controller.bestQuote = async function(req, res) {
        const fileContent = await readFile()
        const routesCsv = convertCsvToJson(fileContent.toString())
        const params = {} 
        params.from = req.params[0]
        params.to = req.params[1]
        const bestToRoute = calcRoute(params, routesCsv)
        res.json(bestToRoute)
    }

    controller.saveQuote = async function(req, res) {
      const newRouteText = `${req.body.from},${req.body.to},${req.body.price}`
      await fs.appendFile(pathFile, newRouteText);
      res.status(201).json(newRouteText)
    }

    async function readFile(){
      const fileContent = await fs.readFile(pathFile);
      return fileContent
    }

    function convertCsvToJson(fileString) {
      fileString = (fileString.replace(/\r/g,'').split('\n'));
      fileString.pop()
      return fileString.map(row=> {
            const item = row.split(',')
            return item ? { from: item[0], to:item[1], price: Number(item[2])} : '';
        })
    }
    
    function calcRoute(params, routesCsv ) {
       const filterByFrom =  routesCsv.filter(rote =>  rote.from.toLowerCase() === params.from.toLowerCase())
       const  bestFromRoute = filterByFrom.filter( (y, index, array)=>{ 
         return y.price === Math.min(...array.map(x => x.price))
       })[0]

       const filterByTo =  routesCsv.filter(rote =>  rote.to.toLowerCase() === bestFromRoute.to.toLowerCase())
       const  bestToRoute = filterByTo.filter( (y, index, array)=>{ 
         return y.price === Math.min(...array.map(x => x.price))
       })
      return bestToRoute;
    }

    return controller; 
}