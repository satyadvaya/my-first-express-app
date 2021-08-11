const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

const data = require('../data.js');

it('gets the soups endpoint', async () => {
    const response = await request.get('/soups');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
});

it('gets a specific soup', async () => {
    const response = await request.get('/soups/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data[0]);
});

// it('gets the soup name', async () => {
//     const response = await request.get('/soups/category/brothy');

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual(data.find(item => item.category === 'brothy'))
// })