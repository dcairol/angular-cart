var filters = angular.module('MyFilters',[]);

filters.filter('total', function(){
	return function(item){
		return item.quantity * item.price;
	};
});