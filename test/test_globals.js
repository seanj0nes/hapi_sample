var supertest = require('supertest');
var environment_api_uri = 'http://localhost:' + (process.env.PORT || 3000);

test_globals = {
	api_uri: environment_api_uri,
    routes: supertest(environment_api_uri)
}

module.exports = test_globals;