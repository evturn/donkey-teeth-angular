'use strict';

/**
 * @ngdoc function
 * @name donkeyTeethApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the donkeyTeethApp
 */
angular.module('donkeyTeethApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
