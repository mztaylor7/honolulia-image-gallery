const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);

it('gets the test endpoint', async done => {
  const response = await request.get('/picture/bigThumb')

  expect(response.status).toBe(200)
  expect(response.body.images).not.toHaveLength(0)
  .done()
})
