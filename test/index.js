const app = require('../index');
const ApiClient = require('./_testUtils/ApiClient');

let server = null;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

global.client = new ApiClient();

beforeAll((done) => {
  server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}.`);
    done()
  });;
});

afterAll((done) => {
  server.close(done);
});