'use strict';

angular.module('uspappApp')
  .controller('CompleteCtrl', ['$q', 'DataAccess', '$location', '$routeParams', '$scope', function ($q, DataAccess, $location, $routeParams, $scope) {
	$scope.Order = {};
	$scope.cart = [];
	$scope.CartfromOrders = [];
	var userProfileProperties;
	var currentuser;

	DataAccess.getOrderByID($routeParams.OrderID).then(function(data){
		$scope.Order = data;
		for(var i = 0; i < data.Items.length; i++)
		{
			DataAccess.getCartItem(data.Items[i]).then(function(data){
				$scope.cart.push(data);
			})
		}
	});

	$scope.Back = function () {
		$window.history.back();
	};

	$scope.Cancel = function () {
		$location.path("/");
	};

	DataAccess.getUserByID('54f69599060f286c28097022').then(function(data){
		$scope.User = data;
	});
	
	$scope.Complete = function () {
		$scope.Order.Status = "Submitted";
		DataAccess.updateOrder($scope.Order).then(function(data){
			var promises = [];
			for(var i = 0; i < $scope.cart.length; i++){
				$scope.cart[i].Status = "Submitted";
				promises.push(DataAccess.updateCart($scope.cart[i]));
			}

			$q.all(promises).then(function(){
				$location.path("/confirm/" + $routeParams.OrderID);
			})
		});
	}
  }]);