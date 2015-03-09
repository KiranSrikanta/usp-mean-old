'use strict';

angular.module('uspappApp')
  .controller('CheckoutCtrl', ['DataAccess', '$location', '$routeParams', '$window', '$scope', function (DataAccess, $location, $routeParams, $window, $scope) {

	$scope.Back = function () {
		$window.history.back();
	};

	if($routeParams.OrderID){
		DataAccess.getOrderByID($routeParams.OrderID).then(function(data){
			$scope.Order = data;
		});
	}

	$scope.Next = function () {
		if($routeParams.OrderID){
			DataAccess.updateOrder($scope.Order).then(function(data){
				$location.path("/complete/" + $routeParams.OrderID);
			});
		}
		else{
			DataAccess.getMyCart().then(function(data){
				$scope.Order.Items = [];
				for(var i = 0; i < data.length; i++){
					$scope.Order.Items.push(data[i]._id);
				}

				DataAccess.createOrder($scope.Order).then(function(data){
					$location.path("/complete/" + data._id);
				});
			})
		}
	};

  }]);
