'use strict';

angular.module('uspappApp')
  .controller('ProductCtrl', ['DataAccess', '$scope', '$routeParams', function (DataAccess, $scope, $routeParams) {
	
	$scope.ProductModels=[];
	var item = $routeParams.item;

	DataAccess.getProductByName(item).then(function(data){
		var size = Math.max(0, (Math.min(5, data.Rating))) * 11;
		//Get values to angular scope from sp list
		$scope.Title= data.Name;
		$scope.RatingNo = data.Rating;                                               
		$scope.Rating= (size + "px");
		
		if(data.Features.length > 0){
			$scope.Features = data.Features[0].Description;
			$scope.Description = data.Features[0].Description;
			$scope.IntendedUse = data.Features[0].Description;

			//Append rich html field of product list directly
			$("#usp_productDescription").html($scope.Description); 
			$("#usp_productFeatures").html($scope.Features); 
			$("#usp_productIntendedUse").html($scope.IntendedUse);
		}

		$scope.OrderLink= '/Order/' + data.Name;
		$scope.Image = data.Image;																								
		$scope.Image1= data.PublishingImage;
		$scope.Image2= data.Image;
		$scope.Image3= data.RollupImage;

		for(var i = 0; i < data.Models.length; i++){
			$scope.ProductModels.push({
				Model: data.Models[i].Title,                                                
				Nickname: data.Models[i].Nickname,                                               
				Weight: data.Models[i].Weight,
				CPU: data.Models[i].CPU,
				Memory: data.Models[i].Memory,
				Storage: data.Models[i].Storage,																																				
				Display: data.Models[i].Display,
				Graphics: data.Models[i].Graphics,												
				Applications: data.Models[i].Applications,
				OS: data.Models[i].CPU,
				Price: data.Models[i].Cost,
				ModelImage: data.Models[i].Image,
				OpticalDrive: data.Models[i].OpticalDrive,
				MobilityProfile: data.Models[i].MobilityProfile,
				ModelOrderLink: $scope.OrderLink + "/" + data.Models[i].Title
	    	});
		}
    });

	//Click on preview images to view full size image 
	$scope.openInNewWindow = function(index){
		$scope.Image = index.target.src;
	};

  }]);