'use strict';

/**
 * @ngdoc function
 * @name donkeyTeethApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the donkeyTeethApp
 */
angular.module('donkeyTeethApp')
  .controller('AboutCtrl', function ($scope) {
  	$scope.message = 'This page is a page about me for you.';
  	$scope.pageClass = 'about';
  });
