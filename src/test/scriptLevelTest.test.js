const axios = require('axios').default;
require('dotenv').config()

describe('Verify that GET spaces request', () => {
    let requestResponse, spaces;
    beforeAll( async () => {
        requestResponse = await axios.get(`${process.env.URL}/spaces`, {
            headers: { 'Authorization': `Bearer ${process.env.WRIKE_TOKEN}`}
        });
        spaces = requestResponse.data.data;
    });

    test('response is OK', () => {
        expect(requestResponse.status).toBe(200);
    });
    
    test('"kind" attribute is spaces', () => {
        expect(requestResponse.data.kind).toBe('spaces');
    });
    
    test('data is array', () => {
        expect(Array.isArray(spaces)).toBe(true);
    });
    
    test('data has string id', () => {
        expect(typeof(spaces[0].id)).toBe('string');
    });
    
    test('data has string title', () => {
        expect(typeof(spaces[0].title)).toBe('string');
    });
    
    test('data has string avatarUrl', () => {
        expect(typeof(spaces[0].avatarUrl)).toBe('string');
    });
    
    test('data has string archived', () => {
        expect(typeof(spaces[0].archived)).toBe('boolean');
    });
});