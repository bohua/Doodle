/**
 * Created by Bli on 2014/4/4.
 */
angular.module('rsda-xzjl-view', ['ngRoute', 'keyboard-support', 'rsda-resource'])
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
			//$.Metro.initDatepickers();

			var today = new Date();
			today = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
			$('#rsda-xzjl-form [data-role=datepicker]').datepicker({
				date: today, // set init date
				format: "yyyy/mm/dd", // set output format
				effect: "none", // none, slide, fade
				position: "bottom", // top or bottom
				locale: 'zhCN',
				weekStart: -1,
				selected: function (date) {
					var model = $(this).get(0)._calendar.parent().find('input').attr('ng-model').split('.')[1];

					if(model){
						$scope.rsda_model[model] = date;
					}
					$scope.$apply();
				}
			});

			$timeout(function(){
				$('#rsda-xzjl-form [data-role=datepicker] input').each(function(k, v){
					var model = $(v).attr('ng-model').split('.')[1];
					$(v).val(today);
					$scope.rsda_model[model] = today;
					$scope.$apply();
				});
			}, 1);

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