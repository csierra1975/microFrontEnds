const { withModuleFederation } = require('@nrwl/angular/module-federation');

module.exports = withModuleFederation({
  name: 'shell',
  remotes: ['mfe1', 'mfe2'],
});
