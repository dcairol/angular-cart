var my_controllers = angular.module('MyControllers',[]);

my_controllers.controller('CartController', function CartController( $scope ){
  $scope.items = [{name: 'Leche', price: 1000, quantity: 2}];

  $scope.newItem = function newItem(){
    $scope.items.push({name: this.name, price: this.price, quantity: this.quantity });
    this.name = '';
    this.price = '';
  }
});