var bcrypt = require('bcryptjs')

export default
/* @ngInject */
class LoginController {
	constructor ($log, apiUrl, $state, $scope, $rootScope, $http, $location, LoginService, AppService) {
  $log.debug('LoginController instantiated!')
  let ctrl = this
	ctrl.apiUrl = apiUrl
//////////////////////////////////////////////////////////
  ctrl.tab = function(state) {
  	return $state.current && state === $state.current.controller
  }

  var authenticate = function(credentials, callback) {

				var headers = credentials ? {
					authorization : "Basic "
							+ btoa(credentials.username + ":"
									+ credentials.password)
				} : {}

				$http.get(ctrl.apiUrl + '/user', {
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

	ctrl.credentials = {}
			ctrl.login = function() {
				authenticate(ctrl.credentials, function(authenticated) {
					if (authenticated) {
						console.log("Login succeeded")
						$location.path("/")
						ctrl.error = false
						$rootScope.authenticated = true
					} else {
						console.log("Login failed")
						$location.path("/login")
						ctrl.error = true
						$rootScope.authenticated = false
					}
				})
			}

			ctrl.logout = function() {
				$http.post('logout', {}).finally(function() {
					$rootScope.authenticated = false;
					$location.path("/");
				})
			}
  ////////////////////////////////////////////////////


  this.user = {'username': '', 'password': ''}
  this.register = function () {
    LoginService.register(this.user).then((result) => {
      if (result.data.name !== null) {
        $location.url('/home')
        this.user = result.data
        AppService.user = result.data
        AppService.loggedIn = true
        $rootScope.message = 'Authentication successful!'
      } else {
        $location.url('/login')
      }
    })
  }

  // this.login = function () {
  //   LoginService.login(this.user).then((result) => {
  //     if (bcrypt.compareSync(this.user.password, result.data.password)) {
  //       this.user = result.data
  //       AppService.user = result.data
  //       AppService.loggedIn = true
  //       $rootScope.message = 'Authentication successful!'
  //       $location.url('/home')
  //     } else {
  //       $rootScope.message = 'Authentication failed.'
  //       $location.url('/login')
  //     }
  //   })
  // }
}
}
