'use strict';
/**
 * @ngdoc function
 * @name donkeyTeethApp.controller:ContactCtrl
 * @description
 * # AboutCtrl
 * Controller of the donkeyTeethApp
 */
 angular.module('donkeyTeethApp')
	.controller('ContactCtrl', function($scope) {
		$scope.message = 'Come on over sometime, have a beer! I\'ll make you a sandwich with cheese in it.';
		$scope.pageClass = 'contact';
 });