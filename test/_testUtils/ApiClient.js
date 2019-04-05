const fs = require('fs');
const nodePath = require('path');
const supertest = require('supertest'); // eslint-disable-line
const expressApp = require('../../index');

class ApiClient {
  setToken(token) {
    this.token = token;
  }

  async get(path, qs) {
    const result = await supertest(expressApp)
      .get(path)
      .set('authorization', `Bearer ${this.token || ''}`)
      .query(qs);

    if (result.error) {
      console.error(JSON.stringify(result.body));
    }
    console.info('---REQUEST.BODY---');
    console.info(JSON.stringify(qs, null, 2));
    console.info('---RESPONSE.BODY---');
    console.info(JSON.stringify(result.body, null, 2));
    return result;
  }

  async post(path, body) {
    const result = await supertest(expressApp)
      .post(path)
      .set('authorization', `Bearer ${this.token || ''}`)
      .send(body);

    if (result.error) {
      console.error(JSON.stringify(result.body));
    }
    console.info('---REQUEST.BODY---');
    console.info(JSON.stringify(body, null, 2));
    console.info('---RESPONSE.BODY---');
    console.info(JSON.stringify(result.body, null, 2));
    return result;
  }

  async put(path, body) {
    const result = await supertest(expressApp)
      .put(path)
      .set('authorization', `Bearer ${this.token || ''}`)
      .send(body);

    if (result.error) {
      console.error(JSON.stringify(result.body));
    }
    console.info('---REQUEST.BODY---');
    console.info(JSON.stringify(body, null, 2));
    console.info('---RESPONSE.BODY---');
    console.info(JSON.stringify(result.body, null, 2));
    return result;
  }

  async delete(path, body = {}) {
    const result = await supertest(expressApp)
      .delete(path)
      .set('authorization', `Bearer ${this.token || ''}`)
      .send(body);

    if (result.error) {
      console.error(JSON.stringify(result.body));
    }
    console.info('---REQUEST.BODY---');
    console.info(JSON.stringify(body, null, 2));
    console.info('---RESPONSE.BODY---');
    console.info(JSON.stringify(result.body, null, 2));
    return result;
  }

  async postFile(path, form, filePath) {
    form.file = this.toBase64(nodePath.join(__dirname, filePath));
    const result = await supertest(expressApp)
      .post(path)
      .set('authorization', `Bearer ${this.token || ''}`)
      .send(form);

    if (result.error) {
      console.error(JSON.stringify(result.body));
    }
    console.info('---REQUEST.BODY---');
    console.info(JSON.stringify(form, null, 2));
    console.info('---RESPONSE.BODY---');
    console.info(JSON.stringify(result.body, null, 2));
    return result;
  }
}

module.exports = ApiClient;