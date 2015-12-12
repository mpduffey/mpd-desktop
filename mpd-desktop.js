angular.module('mpd.desktop', ['ui.bootstrap',
															 'mpd.controller',
															 'mpd.utilities'
															])
.directive('mpdDesktop', function() {
	var template = '<div class="row max-width max-height flex-item flex-container-column">\
										<uib-tabset class="flex-item flex-container-column max-width">\
											<uib-tab heading="{{tab.heading}}" active="tab.active" ng-repeat="tab in tabs" class="flex-item flex-container-column">\
												<div class="controller-container flex-item flex-container-row" ng-controller="mpdTabCtrl">\
													<mpd-controller ng-repeat="ctrl in ctrls"></mpd-controller>\
												</div>\
											</uib-tab>\
											<uib-tab ng-click="addTab()" heading="+"></uib-tab>\
										</uib-tabset>\
									</div>';
	return {
		restrict:	'E',
		template:	template,
		replace:	true,
		controller:	function($scope, $sce) {
			$scope.tabs = [
				{heading: "Mike", active: true},
				{heading: "Morgan"}
			];
			$scope.addTab = function() {
				$scope.tabs.push({heading: "Tab " + ($scope.tabs.length + 1), content: "add one", active: true});
			}
			
			$scope.controllers = [{}, {}, {}];
			$scope.addController = function() {
				$scope.controllers.push({});
			}
		}
	};
})
.controller('mpdTabCtrl', function($scope) {
	$scope.ctrls = [{}, {}, {}];
});