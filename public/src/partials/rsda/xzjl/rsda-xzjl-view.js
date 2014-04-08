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
			$.Metro.initDatepickers();

			$timeout(function(){
				$.Metro.initTabs();
			},100);


			$scope.model = {};
			$scope.showPersonalInfoSection = true;
			$scope.showCareerInfoSection = true;
			$scope.showContactInfoSection = true;


			$scope.save = function($event){
				$event.preventDefault();
				$event.stopPropagation();
				console.log('saved!');
			};
		}]);