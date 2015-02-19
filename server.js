var WebSocketServer = require('ws').Server;

var server = new WebSocketServer({port: 3000});

server.on('connection', function(ws) {
  var url = ws.upgradeReq.url;
  console.log('client connecting with url: ' + url);
});
