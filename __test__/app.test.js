const request = require('supertest');

const app = require('../app');

describe('Test the /api/data route', () => {
  test('It should return a JSON response with message "Mobile device detected" when user agent is from a mobile device', async () => {
    const response = await request(app)
      .get('/api/data')
      .set(
        'User-Agent',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1'
      );

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Mobile device detected' });
  });

  test('It should return a JSON response with message "Web browser detected" when user agent is from a web browser', async () => {
    const response = await request(app)
      .get('/api/data')
      .set(
        'User-Agent',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
      );

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Web browser detected' });
  });
});
