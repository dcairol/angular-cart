define(['angular', 'app'],function(angular, my_app){
	return my_app.config(['$routeProvider',function($routeProvider){
		$routeProvider.
		  when('/',{
		  	templateUrl: 'views/cart.html',
		  	controller: 'CartController'
		  }).
		  otherwise({
		  	redirecTo: '/'
		  });
	}]);
});