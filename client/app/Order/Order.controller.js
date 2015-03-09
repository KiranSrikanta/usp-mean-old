'use strict';

angular.module('uspappApp')
  .controller('OrderCtrl', ['DataAccess', '$routeParams', '$location', '$scope', function (DataAccess, $routeParams, $location, $scope) {
		$scope.Order = {};
		$scope.Order.Quantity = 1;
		$scope.Order.Reason = "Replace aging system";
		$scope.Order.Models = [];
		$scope.Order.Product = {};
		$scope.Order.UsedEquipment = false;
		$scope.Order.Policy = false;
		$scope.Order.ETA = "";
		$scope.Order.BusinessJustification = "";

		$scope.SelectedModel = {};
		$scope.SelectedModel.Cost = 0;
		$scope.SelectedModel.Image = "";
		$scope.Attachment = {};

		$scope.ShowModelOption = false;
		$scope.ShowETA = false;
		$scope.ShowRemoveAttachment = false;

		var ProductID = $routeParams.ProductID;
		var ModelID = $routeParams.ModelID;

		DataAccess.getProductByName(ProductID).then(function(data){
			$scope.Order.Product = data;

            $scope.SelectedModel.Cost = $scope.Order.Product.Cost;//.replace(/[^0-9\.]+/g, "");

            //$scope.Order.Product.Image1 = data.Image;

            if ($scope.Order.Product.ETA > 0) {
                $scope.Order.ETA = moment().add($scope.Order.Product.ETA, 'days').format("MMM D, YYYY");
                $scope.ShowETA = true;
            }

            $scope.Order.Models = data.Models;

            if ($scope.Order.Models.length > 0) {
                $scope.ShowModelOption = true;
                if(ModelID){
                    for (var i = 0; i < $scope.Order.Models.length; i++) {
                        if ($scope.Order.Models[i].Title == ModelID) {
                            $scope.SelectedModel = $scope.Order.Models[i];
                        }
                    }
                }
                else
                    $scope.SelectedModel = $scope.Order.Models[0];
            }
            else
            	$scope.SelectedModel.Image = $scope.Order.Product.Image;
		});

		$scope.$watch('SelectedModel', function (newVal, oldVal) {
			if (newVal.Image !== oldVal.Image && newVal.Image) {
				$('#imgProductImage').attr('src', newVal.Image);
			}
		}, true);

		function AddToCart(){
			return DataAccess.addToCart({
				//User Needs to Change!
				User: 'Kiran',
				Product: ProductID,
				Model: ModelID,
				CompanyAcquisitionPolicy: $scope.Order.Policy,
				Status: 'Cart',
				Quantity: $scope.Order.Quantity,
				Reason: $scope.Order.BusinessJustification,
				Total: $scope.SelectedModel.Cost * $scope.Order.Quantity,
				Used: $scope.Order.UsedEquipment,
				Cost: $scope.SelectedModel.Cost,
				//Implement Attachment
				Attachment: '',
				ETA: $scope.Order.Product.ETA
			});
		}

		function CreateOrder(Items){
			return DataAccess.createOrder({
				RequestedBy: 'Kiran',
				Status: 'Cart',
				Items: [Items],
				Mobile: '',
				Phone: '',
				RequestedFor: ''
			});
		}

		$scope.addToCart = function () {
			AddToCart().then(function(data){
				$location.path( "/Cart" );
			});
		};

		$scope.checkout = function () {
            AddToCart().then(function(data){
				CreateOrder(data._id).then(function(data){
					$location.path("/checkout/" + data._id);
				});
			});
        };

        $scope.onFileSelect = function ($files) {
            $scope.Attachment = $files[0];
            //$scope.$digest();
        };
  }]);
