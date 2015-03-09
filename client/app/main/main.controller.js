'use strict';

angular.module('uspappApp')
  .controller('MainCtrl', ['DataAccess', '$scope', function (DataAccess, $scope) {
    
    $scope.slides = [];
    DataAccess.getAllCarouselItems().then(function(data){
        $scope.slides = data;
    // 	for(var i = 0; i < data.length; i++){
    // 		if(i == 0)
				// $("#usp_CarouselDIV").append("<div  class=\"item active\"><a href=\""+ data[i].ProductUrl +"\"> <img src=\""+ data[i].Image +"\" alt=\""+ data[i].Title +"\"/></a> </div>");				
    //         else 
	   //          $("#usp_CarouselDIV").append("<div  class=\"item\"><a href=\""+ data[i].ProductUrl +"\"> <img src=\""+ data[i].Image +"\" alt=\""+ data[i].Title +"\"/></a> </div>");
    // 	}
    });

    $scope.Products = [];
    DataAccess.getTopProducts().then(function(data){
    	for(var i = 0; i < data.length; i++){
    		$scope.Products.push({
    			Title: data[i].Title,                                                
                AverageRating: (Math.max(0, (Math.min(5, data[i].Rating))) * 11 + "px"),
                ProductLink: "#/Product/" + data[i].Title,
				MaximumPrice: data[i].Cost,												
				Image: data[i].Image
    		})
    	}
    });

  }]);