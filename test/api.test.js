const request = require('supertest');
const express = require('express');
const api = require('../api/hello');

const app = express();
app.get('/api/hello', api);

beforeAll((done) => {
  server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}.`);
    done()
  });;
});

describe('GET /api/hello', function(){
  it('respond with "Hello World!"', function(done){
    request(app)
      .get('/api/hello')
      .expect(200)
      .expect("Hello World!", done)
  })
});

afterAll((done) => {
  server.close(done);
});
