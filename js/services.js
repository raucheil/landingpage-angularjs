/*global angular*/
angular.module('pretotypingApp.services', []);

pretotypingApp.factory('dataApi', function dataApi($http, $q, $routeParams) {
    // Use strict for more strict javascript rules
    'use strict';

    // ------------------------------------------------------------------------------------------------------ //
    // Get the data from the JSON file - Located in data/data.json
    // ------------------------------------------------------------------------------------------------------ //
    function getData() {
      return ($http.get('data/data.json').then(handleSuccess, handleError));
    }

    // ------------------------------------------------------------------------------------------------------ //
    // This function is purely for logging whether the data was succesfully retrieved from the API call.
    // ------------------------------------------------------------------------------------------------------ //
    function handleSuccess(response){
	    return response.data;
	  }

    function handleError(response) {
      if (!angular.isObject(response.data) || !response.data.message) {
        return ($q.reject("An unknown error occured"));
      }
      return ($q.reject(response.data.message));
    }

    // ------------------------------------------------------------------------------------------------------ //
    // routeParams is used to creating a parameter for routing
    // ------------------------------------------------------------------------------------------------------ //
    var getRouteParams = function () {
      return $routeParams;
    }

    // Return all the data from the functions.
    return ({
        getData: getData,
        getRouteParams: getRouteParams
    });
});
