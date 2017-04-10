/*global angular*/
angular.module('pretotypingApp.controllers', []);

pretotypingApp.controller('HomeCtrl', function ($scope, dataApi, $routeParams) {
    'use strict';

    // ------------------------------------------------------------------------------------------------------ //
    // Create a name for the view to show as the title
    // ------------------------------------------------------------------------------------------------------ //

    $scope.viewname = 'Pretotyping';

    // ------------------------------------------------------------------------------------------------------ //
    // Set the stateparams
    // ------------------------------------------------------------------------------------------------------ //
    $scope.id = $routeParams.id;

    // ------------------------------------------------------------------------------------------------------ //
    // The API call to get the data from the JSON file
    // ------------------------------------------------------------------------------------------------------ //
    dataApi.getData().then(function (succ) {
      $scope.items = succ;
    }, function(err) {
      console.log('Error: ', err);
    });

});


pretotypingApp.controller('AboutCtrl', function ($scope, dataApi, $routeParams) {
    'use strict';

    // ------------------------------------------------------------------------------------------------------ //
    // The view name and the stateParams definition
    // ------------------------------------------------------------------------------------------------------ //

    $scope.viewname = 'Single Item';


});


pretotypingApp.controller('ItemCtrl', function ($scope, dataApi, $routeParams) {

  // Create a name for the view to show as the title
    $scope.viewname = 'Items';

    // The routeParams is defined in the Services.js and defined in the scope here.
    $scope.id = $routeParams.id;

    // ------------------------------------------------------------------------------------------------------ //
    // The API call to get the data from the JSON file
    // ------------------------------------------------------------------------------------------------------ //
    dataApi.getData().then(function (succ) {

      $scope.items = succ;

    }, function(err) {
      console.log('Error: ', err);
    });

});