var Hapi = require('hapi');
var server = new Hapi.Server(process.env.PORT || 3000);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
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

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
