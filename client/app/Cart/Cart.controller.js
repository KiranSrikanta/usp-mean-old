'use strict';

angular.module('uspappApp')
  .controller('CartCtrl', ['DataAccess', '$routeParams', '$location', '$scope', function (DataAccess, $routeParams, $location, $scope) {
	$scope.CartProducts = [];
	$scope.Saved = [];
	$scope.noItem = "";//"There are no items to display";
	$scope.noCart = "";//"There are no items to display";
	
	var currentuser = 'Kiran';

	DataAccess.getMyCart().then(function(data){
		$scope.CartProducts = data;
	});

	$scope.removeCart = function(index, id) {
		DataAccess.removeFromCart(id).then(function(data){
			$scope.CartProducts.splice(index, 1);
		});
	}

	$scope.SaveForLater = function(cart, index){
		cart.Status = 'Saved';
		DataAccess.updateCart(cart).then(function(data){
			$scope.CartProducts[index].Status = 'Saved';
		});
	}

	$scope.ReadyToPurchase = function(cart, index){
		cart.Status = 'Cart';
		DataAccess.updateCart(cart).then(function(data){
			$scope.CartProducts[index].Status = 'Saved';
		});
	}
	
  }]);
