define([
	'angular',
	'controllers',
	'filters',
	'angularRoute'
	], function(angular, foo, bar, baz){

	var my_app = angular.module('myApp',[
		'ngRoute',
		'myApp.controllers',
		'MyFilters'
	]);

	return my_app;

});