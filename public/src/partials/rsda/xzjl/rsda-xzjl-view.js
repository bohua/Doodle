/**
 * Created by Bli on 2014/4/4.
 */
angular.module('rsda-xzjl-view', ['ngRoute', 'keyboard-support','rsda-resource'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when('/rsda/xzjl', {templateUrl: '/src/partials/rsda/xzjl/rsda-xzjl-view.tpl.html', controller: 'rsdaXzjlViewController'});
	}])
	.controller('rsdaXzjlViewController', [
		'$scope',
		'$http',
		'$timeout',
		'RSDA',
		function ($scope, $http, $timeout, RSDA) {

			$.Metro.initTabs();
			$.Metro.initInputs();
			$.Metro.initDatepickers();


			$scope.rsda_model = {};
			$scope.showPersonalInfoSection = true;
			$scope.showCareerInfoSection = true;
			$scope.showContactInfoSection = true;
			$scope.showSalaryInfoSection = true;


			$scope.save = function ($event) {
				$event.preventDefault();
				$event.stopPropagation();

				var rsda = new RSDA($scope.rsda_model);
				rsda.$save();
			};
		}]);