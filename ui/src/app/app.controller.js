
export default
/* @ngInject */
class AppController {
	constructor ($log, $http, AppService, AuthSharedService, $window, $scope, $timeout, $location, $state, $rootScope, $mdDialog, apiUrl) {
  $log.debug('AppController instantiated!')
  this.apiUrl = apiUrl
  let ctrl = this

////////////////////////////////////////////////////
	ctrl.test = function(){
		console.dir('test')
		$log.debug('TEST!')
	}

	var originatorEv;

    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };

	ctrl.redirect = function(url, refresh) {
		console.dir('It gets to the controller')
    if(refresh || $scope.$$phase) {
        $window.location.href = url;
    } else {
        $location.path(url);
        $scope.$apply();
    }
	}

/////////////////////////////////////////////////
  ctrl.tab = function(state) {
  	return $state.current && state === $state.current.controller
  }

  var authenticate = function(credentials, callback) {
			console.dir('authenticate RAN')
				var headers = credentials ? {
					authorization : "Basic "
							+ btoa(credentials.username + ":"
									+ credentials.password)
				} : {}

				$http.get('user', {
					headers : headers
				}).then(function(response) {
					if (response.data.name) {
						$rootScope.authenticated = true
					} else {
						$rootScope.authenticated = false
					}
					callback && callback($rootScope.authenticated);
				}, function() {
					$rootScope.authenticated = false
					callback && callback(false)
				})

			}

			authenticate()

}
}
