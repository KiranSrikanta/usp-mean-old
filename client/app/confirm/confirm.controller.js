'use strict';

angular.module('uspappApp')
  .controller('ConfirmCtrl', ['DataAccess', '$location', '$routeParams', '$scope', function (DataAccess, $location, $routeParams, $scope) {
    $scope.Order = {};
	$scope.Cart = [];

	DataAccess.getOrderByID($routeParams.OrderID).then(function(data){
		$scope.Order = data;
		for(var i = 0; i < data.Items.length; i++)
		{
			DataAccess.getCartItem(data.Items[i]).then(function(data){
				$scope.Cart.push(data);
			})
		}
	});
  }]);
