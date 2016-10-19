export default
	/* @ngInject */
 class AuthSharedService {
   constructor ($rootScope, $http, authService, Session) {
     this.login = function (userName, password, rememberMe) {
            console.dir('AuthService -> login started')
            var config = {
                ignoreAuthModule: 'ignoreAuthModule',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            };
            $http.post('authenticate', angular.element.param({
                username: userName,
                password: password
//                ,
//                rememberme: rememberMe
            }), config)
                .success(function (data, status, headers, config) {
                    authService.loginConfirmed(data);
                })
                .error(function (data, status, headers, config) {
                    $rootScope.authenticationError = true;
                    Session.invalidate();
                });
        }
        this.getAccount = function () {
            $rootScope.loadingAccount = true;
            $http.get('security/account')
                .then(function (response) {
                    authService.loginConfirmed(response.data);
                });
        }
        this.isAuthorized = function (authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                if (authorizedRoles == '*') {
                    return true;
                }
                authorizedRoles = [authorizedRoles];
            }
            var isAuthorized = false;
            angular.forEach(authorizedRoles, function (authorizedRole) {
                var authorized = (!!Session.login &&
                Session.userRoles.indexOf(authorizedRole) !== -1);
                if (authorized || authorizedRole == '*') {
                    isAuthorized = true;
                }
            });
            return isAuthorized;
        }
        this.logout = function () {
            $rootScope.authenticationError = false;
            $rootScope.authenticated = false;
            $rootScope.account = null;
            $http.get('logout');
            Session.invalidate();
            authService.loginCancelled();
        }
    };
}
