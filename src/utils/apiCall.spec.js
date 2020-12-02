const { processOptions } = require('./apiCall');

const tokenStub = 'stub';
localStorage.setItem('authToken', tokenStub);

describe('processOptions should', () => {
  test('return an empty object given an empty, null or undefined parameter', () => {
    expect(processOptions()).toEqual({});
    expect(processOptions(null)).toEqual({});
    expect(processOptions(undefined)).toEqual({});
  });
  test('return an object with Authorization header and GET method', () => {
    expect(processOptions({ method: 'get', auth: true })).toEqual({
      method: 'GET',
      headers: { Authorization: 'stub' },
    });
  });
  test('return an object with Authorization and Content-Type headers and POST method', () => {
    expect(processOptions({ method: 'post', auth: true })).toEqual({
      method: 'POST',
      headers: {
        Authorization: 'stub',
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  });
  test('return an object with Authorization and Content-Type headers and POST method and a body', () => {
    const bodyStub = { id: '123Stub' };
    const bodyStubStringified = JSON.stringify(bodyStub);

    expect(
      processOptions({ method: 'post', auth: true, body: bodyStub })
    ).toEqual({
      method: 'POST',
      headers: {
        Authorization: 'stub',
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: bodyStubStringified,
    });
  });
});
