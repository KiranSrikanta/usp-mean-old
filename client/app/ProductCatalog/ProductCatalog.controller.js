'use strict';

angular.module('uspappApp')
  .controller('ProductCatalogCtrl', ['DataAccess', '$scope', '$routeParams', function (DataAccess, $scope, $routeParams) {
    
    $scope.Products=[];

    var itemCategory = $routeParams.Child;
	var itemCategory_onelevelabove = $routeParams.Parent;

	if(itemCategory == "all")
		itemCategory = $routeParams.Parent;

	$scope.roles = [
		{ name:"All", value:"0-100000"},
		{ name:"$500-$999", value:"500-999"},
		{ name:"$1,000-$1,499", value:"1000-1499"},
		{ name:"$1,500-$1,999", value:"1500-1999"},
		{ name:"$2,000-$2,499", value:"2000-2499"},
		{ name:"$2,500+", value:"2500-100000"}
	];

	$scope.user = {
		roles: ["0-100000"]
	};

	$scope.CatalogLable = itemCategory.toUpperCase();

	DataAccess.getProductsFromCategory(itemCategory).then(function(data){
		for(var i=0;i<data.length;i++){
			var size = Math.max(0, (Math.min(5, data[i].Rating))) * 11;
			$scope.Products.push({
				Title: data[i].Name,
				AverageRating: (size + "px"),
				ProductLink: "/Product/" + data[i].Name,
				MaximumPrice: data[i].Cost,												
				Image: data[i].Image
			});
		}
	});

	    // Checks only the check box which is cliclked and unchecks other check box
    $scope.CheckOne = function(PriceRange){	    
	   	$scope.user.roles.splice(0, $scope.user.roles.length); 
	    $scope.user.roles.push(PriceRange);
	    
    };

    //Filter by currency range starts here
	$scope.byRange = function (PriceRange, fieldName) {
		if(PriceRange.length>0){
		    var minValue = PriceRange[0].split("-")[0];
			var maxValue = PriceRange[0].split("-")[1];	
			if (minValue === undefined) minValue = Number.MIN_VALUE;
		    if (maxValue === undefined) maxValue = Number.MAX_VALUE;
		    
		    return function predicateFunc(item) {		
		          return minValue <= item[fieldName] && item[fieldName] <= maxValue;
	        };
        }
	};


  }]);
