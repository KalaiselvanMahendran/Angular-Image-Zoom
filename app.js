var app = angular.module('Magnify', []);

app.controller('imageCtrl', function($scope, $http){
	
	$scope.canImages = [
							{
							can_name: "Rajinikanth",
							can_path: "http://www.udayavani.com/sites/default/files/images/articles/2015/10/28/RAJANIKANTH.jpg",
							},

							{
							can_name: "Ajith Kumar",
							can_path: "http://www.cinepunch.in/wp-content/uploads/2015/01/thala-ajith.jpg",
							},

							{
							can_name: "Vijay",
							can_path: "http://st1.bollywoodlife.com/wp-content/uploads/2016/03/689462.jpg",
							}
						];

	$scope.currentImg = $scope.canImages[0].can_path;

	$scope.setImage = function(img){
		$scope.currentImg = img;
	};

});