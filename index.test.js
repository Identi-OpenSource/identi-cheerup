const assert = require('assert');
const cheerup = require('./index');

function testGetInspirationalMessage() {
  const message = cheerup.getInspirationalMessage();
  assert.strictEqual(typeof message, 'string', 'El mensaje debería ser un string');
  console.log('¡Prueba pasada con éxito!');
  console.log('El mensaje es:', message);
}

testGetInspirationalMessage();
