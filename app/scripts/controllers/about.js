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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
