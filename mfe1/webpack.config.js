const { withModuleFederation } = require('@angular-architects/module-federation');

module.exports = withModuleFederation({
  name: 'mfe1',
  exposes: {
    './EntryComponent': './mfe1/src/app/app.component.ts', // Este es el componente expuesto
  },
  shared: {
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  },
});
