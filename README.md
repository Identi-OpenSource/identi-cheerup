
# Mensaje de Ánimo JS

Un simple paquete de NPM que genera un mensaje de ánimo aleatorio. Creado para ser usado en cualquier proyecto de JavaScript.

## Instalación

Para instalar este paquete desde GitHub Packages, primero necesitas configurar tu cliente de NPM para que se autentique con GitHub. Luego, puedes instalarlo:

```bash
npm install @identi-opensource/identi-cheerup
```

## Uso

El uso es muy sencillo. Solo importa la función `getInspirationalMessage` y llámala.

```javascript
const animo = require('@identi-opensource/identi-cheerup');

const mensaje = animo.getInspirationalMessage();
console.log(mensaje); 
// Ejemplo de salida: "¡Sigue adelante, lo estás haciendo genial!"
```

## Contribuir
Si quieres contribuir, por favor abre un issue o un pull request en el repositorio de GitHub.

## Licencia
Apache-2.0
