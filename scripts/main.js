require.config({

  paths: {
  	angular: './lib/angular',
  	angularRoute: './lib/angular-route'
  },

  shim: {
	'angular' : {'exports' : 'angular'},
  	'angularRoute': ['angular']
  },

  priority: [
    'angular'
  ]

});

window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});