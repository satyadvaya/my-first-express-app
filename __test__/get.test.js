const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

const data = require('../data.js');

it('gets the idiots endpoint', async () => {
    const response = await request.get('/idiots');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
});

it('gets the idiots show endpoint', async () => {
    const response = await request.get('/idiots/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data[0]);
});