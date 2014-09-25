define(['angular'],function ( angular ){

	return angular.module('myApp.controllers',[])
	.controller('CartController', function CartController( $scope ){
	  var id = 0;
	  $scope.items = [{name: 'Leche', price: 1000, quantity: 2, id: id++}];

	  $scope.newItem = function newItem(){
	    $scope.items.push({name: this.name, price: this.price, quantity: this.quantity });
	    this.name = '';
	    this.price = '';
	    this.id = id++;
	  };
	})
	.controller('ItemsController',function ItemsController($scope,$routeParams){
		$scope.name = $routeParams.name;
	});
});