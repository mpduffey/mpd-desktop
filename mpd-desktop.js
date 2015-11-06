angular.module('mpd.desktop', [])
.directive('mpdDesktop', function() {
	var template = '<div class="row max-width max-height flex-item flex-container-column">\
						<div class="row max-width">\
							<button type="button" class="btn btn-primary" ng-click="addController()">Add Controller</button>\
						</div>\
						<div class="row max-width flex-item flex-container-row"></div>\
					</div>';
	return {
		restrict:	'E',
		template:	template,
		replace:	true
	};
});