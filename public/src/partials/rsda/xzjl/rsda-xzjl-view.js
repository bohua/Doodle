/**
 * Created by Bli on 2014/4/4.
 */
angular.module('rsda-xzjl-view', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when('/rsda/xzjl', {templateUrl: '/src/partials/rsda/xzjl/rsda-xzjl-view.tpl.html', controller: 'rsdaXzjlViewController'});
	}])
	.controller('rsdaXzjlViewController', [
		'$scope',
		'$http',
		'$timeout',
		function ($scope, $http, $timeout) {
			$.Metro.initInputs();
		}]);