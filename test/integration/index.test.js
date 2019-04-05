require('../index');

describe(':index', () => {
  test('[GET /] Should get server is running response', async (done) => {
    const res = await client.get('/', {});

    expect(res.body).toMatchSnapshot();

    done()
  });
});