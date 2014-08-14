var test_globals = require('./test_globals');
var routes = test_globals.routes;
var should = require('should');

describe('API Calls to hapi_sample', function () {

    describe('with configuration', function(){
        it('should match the appropriate URI to test against the API', function(){
            var uri = 'http://localhost:' + (process.env.PORT || 3000);
            uri.should.eql(test_globals.api_uri);
        })
    })

    it('should get a hello world statement from the root domain URI', function (done) {
        routes.get('/')
            .expect(200, 'Hello, world!')
            .end(function (err, res) {
                if (err) return done(err);
                done()
            });
    })

    // // Converge
    // it('should respond to POST requests to the /converge route', function (done) {
    //     routes.post('/converge')
    //         .expect(200)
    //         .end(function (err, res) {
    //             if (err) return done(err);
    //             done()
    //         });
    // })

});