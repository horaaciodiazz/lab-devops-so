const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../server');

test('GET / responde "Hola Mundo DevOps"', async () => {
  const server = app.listen(0);
  const { port } = server.address();
  try {
    const res = await fetch(`http://localhost:${port}/`);
    const body = await res.text();
    assert.equal(res.status, 200);
    assert.equal(body, 'Hola Mundo DevOps');
  } finally {
    server.close();
  }
});

test('GET /health responde 200 OK', async () => {
  const server = app.listen(0);
  const { port } = server.address();
  try {
    const res = await fetch(`http://localhost:${port}/health`);
    const body = await res.json();
    assert.equal(res.status, 200);
    assert.equal(body.status, 'ok');
  } finally {
    server.close();
  }
});
