require.config({

  paths: {
  	'angular': './lib/angular',
  	'angular-route': './lib/angular-route'
  },

  shim: {
  	'angular-route': ['angular']
  }

});

require(['app']);