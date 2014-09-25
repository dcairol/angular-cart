define(['angular', 'app'],function(angular, my_app){
	return my_app.config(function($routeProvider){
		$routeProvider.
		  when('/',{
		  	templateUrl: 'views/cart.html',
		  	controller: 'CartController'
		  }).
		  when('/items/:name',{
		  	templateUrl: 'views/item.html',
		  	controller: 'ItemsController'
		  }).
		  otherwise({
		  	redirecTo: '/'
		  });
	});
});