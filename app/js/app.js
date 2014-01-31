'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/list.html', controller: movieFinderCtrl});
    $routeProvider.when('/movie/:movieId', {templateUrl: 'partials/detail.html', controller: MovieDetails});
    $routeProvider.when('/video/:movieId', {templateUrl: 'partials/trailer.html', controller: movieTrailerCtrl});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
