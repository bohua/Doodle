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
					var el = $(this).get(0)._calendar.parent().find('input')
					var model = el.attr('ng-model').split('.')[1];

					if (model) {
						$scope.rsda_model[model] = date;
					}
					$scope.$apply();

					el.focus();
				}
			});

			/*
			 $timeout(function () {
			 $('#rsda-xzjl-form [data-role=datepicker] input').each(function (k, v) {
			 var model = $(v).attr('ng-model').split('.')[1];
			 $(v).val(today);
			 $scope.rsda_model[model] = today;
			 $scope.$apply();
			 });
			 }, 1);
			 */
			$scope.rsda_model = {};
			$scope.rsda_model.rsda_social_security = {};
			$scope.rsda_model.rsda_first_birth = {};
			$scope.rsda_model.rsda_first_birth.rsda_first_birth_children = [];

			$scope.rsda_model.rsda_family_member = [
				{
					jtcyxm: "王大头",
					ybrgx: "父",
					csrq: "1958/09/02",
					gzdw: "阿里山造车厂",
					drzw: "车间主任",
					zzmm: "党员",
					lxdh: "13987654302"
				},{
					jtcyxm: "黄三娘",
					ybrgx: "母",
					csrq: "1962/01/18",
					gzdw: "天山养老护理三合一综合医疗中心下属第三分院护士中心",
					drzw: "护士长",
					zzmm: "平民",
					lxdh: "0824-76543892"
				}

			];

			$scope.expandableSection = {
				//基本资料
				showPersonalInfoSection: true,
				showCareerInfoSection: true,
				showContactInfoSection: true,
				showSalaryInfoSection: true,

				//扩充资料
				showSocialInsuranceSection: true,
				showBusinessInsuranceSection: true,
				showAdditionalFundationsSection: true,
				showContactPersonAndFunderSection: true,
				showBirthStrategySection: true,

				//家庭成员
				showFamilyMembersSection: true
			}


			$scope.save = function ($event) {
				$event.preventDefault();
				$event.stopPropagation();

				var rsda = new RSDA($scope.rsda_model);
				rsda.$save();
			};


			$scope.addNewFamilyMember = true;
		}]);