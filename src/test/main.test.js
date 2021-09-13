require('dotenv').config()
const request = require('supertest')('https://www.wrike.com/api/v4');

describe('GET /account', function() {
    it('responds with json', function(done) {
      request
        .get('/account')
        .set('Authorization', `Bearer ${process.env.WRIKE_TOKEN}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('GET /folders', function() {
    it('responds with json', function(done) {
      request
        .get('/account')
        .set('Authorization', `Bearer ${process.env.WRIKE_TOKEN}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});