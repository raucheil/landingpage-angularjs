// Ionic App
var pretotypingApp = angular.module('pretotypingApp', ['pretotypingApp.controllers', 'pretotypingApp.services', 'ngRoute']);

pretotypingApp.config(function ($routeProvider) {

    $routeProvider.
    when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    }).
    when('/items/:id', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl'
    }).
    when('/category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
    }).
    when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
});
