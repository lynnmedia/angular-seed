'use strict';

var API_KEY = "dxgknt8n445rbpycq73md34k";

// Declare app level module which depends on filters, and services
angular.module('movieApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {templateUrl: 'partials/search.html'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html'});
  $routeProvider.otherwise({redirectTo: '/search'});
}]);

var SearchCtrl = function($scope, $routeParams, $http, $location) {
	redirectToBaseUI($location);

	$scope.onSearchClicked = function(moviename) {
		redirectToBaseUI($location);
		$scope.movieResult = searchMovie(moviename, $scope, $http);
	};
};

function redirectToBaseUI($location) {
	// set the correct path if it is not.
	if( $location.path() != "/search" ) {
		console.log('setting the root path first');
		$location.path("/search");.0
	}
}

function searchMovie(moviename, $scope, $http) {
	var APIUrl = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=" + API_KEY + "&q=" + moviename + "&callback=JSON_CALLBACK";

	$http({method: 'JSONP', url: APIUrl})
	.success(function(data, status, headers, config) {
		$scope.movieResult = data;
		console.log('Success ');
		console.log(movieResult);
	})
	.error(function(data, status, headers, config) {
		console.log('Error ' + status);
	});
}
