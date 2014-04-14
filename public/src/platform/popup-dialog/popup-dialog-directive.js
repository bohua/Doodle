/**
 * Created by Bli on 14-3-6.
 */
angular.module('popup-dialog', [])
	.directive('popupDialog',[ '$compile', function ($compile) {
		var Dialog = {
			restrict: 'E',
			scope: {
				dialogConfig: "=",
				emitCompare : '&onCompare',
				emitCancel : '&onCancel'
			},
			link: function ($scope, $element, $attributes) {
				var _onDialogShow = $scope.dialogConfig.onShow,
					template = $scope.dialogConfig.template;

				$scope.dialog_data_model = {};

				if (template) {
					$('<div></div>').load(template, function (response, status, xhr) {
						if (status == "error") {
							return xhr.status + " " + xhr.statusText;
						}

						$($element).on('click', function () {
							$.extend(true, $scope.dialogConfig.dialogOption, {
								content: $compile(response)($scope),
								onShow: _onDialogShow
							});

							$.Dialog($scope.dialogConfig.dialogOption);
						});
					});
				}

				$scope.Confirm = function(){
					$.Dialog.close();
					$scope.emitCompare({date: $scope.dialog_data_model});
				};

				$scope.Cancel = function(){
					$.Dialog.close();
					$scope.emitCancel();
				};
			}
		};

		return Dialog;
	}]);