'use strict';

angular.module('uspappApp')
  .controller('HeaderCtrl', ['DataAccess', '$scope', function (DataAccess, $scope) {
    
    $scope.userName = "";
    	
    	//HardCoding - Need Config
    	$scope.Searchurl = "http://test2012:2014/emc/usp/search/Pages/results.aspx#k=";
        
        //Needs Endpoint!
        $scope.userName = "Kiran";

		$scope.FullNavigation = [];
        DataAccess.getAllNavigations().then(function(data){
        	$scope.FullNavigation = data;
            $("#Splash").hide();
        });
        
        $scope.cart = 0;

  }]);