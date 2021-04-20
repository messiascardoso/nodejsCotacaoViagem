const http = require('http');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');
const consign = require('consign');

const app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.disable('x-powered-by');
app.use(methodOverride());
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

consign()
    .include('controllers')
    .then('routes')
    .into(app);
    
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
