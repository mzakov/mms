var bcrypt = require('bcryptjs')

export default
/* @ngInject */
class LoginController {
  constructor ($rootScope, $scope, $log, AuthSharedService) {
	let ctrl = this
  	$log.debug('LoginController instantiated!')

 // 	ctrl.rememberMe = true;

  	ctrl.login = function() {
		console.dir('LoginController -> login started')
    	$rootScope.authenticationError = false;
      AuthSharedService.login(ctrl.userName, ctrl.password
//      , ctrl.rememberMe
      );
    }
  }
}
