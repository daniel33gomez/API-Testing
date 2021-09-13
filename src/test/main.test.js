require('dotenv').config()
const assert = require('chai').assert;
const request = require('supertest')('https://www.wrike.com/api/v4');

describe('GET /account', () => {
    it('responds with json', () => {
      request
        .get('/account')
        .set('Authorization', `Bearer ${process.env.WRIKE_TOKEN}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
            assert.isNotEmpty(res.body);
        });
    });
});

describe('GET /folders', () => {
    it('responds with json', () => {
      request
        .get('/account')
        .set('Authorization', `Bearer ${process.env.WRIKE_TOKEN}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
            assert.isNotEmpty(res.body);
        })
    });
});