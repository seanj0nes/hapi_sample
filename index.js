var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server('localhost', 8000);

// Add the route
server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
        reply('hello world');
    }
});

server.route({
    method: 'POST',
    path: '/yolo',
    handler: function (request, reply) {

    	  var sampleInfo = {
    	  	author: 'Adron Hall',
    	  	book: 'Marxist Capitalist Communist Manifesto',
    	  	test: "There's a lot in this book!"
    	  };

        reply(sampleInfo);
    }
});

// Start the server
server.start();