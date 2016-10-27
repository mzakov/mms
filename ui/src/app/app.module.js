import mmsMap from './map/map.module'
import apiUrl from './api.url'
import userRoles from './user.roles.js'
import mmsApp from './app.component.js'
import home from './home/home.module.js'
import login from './login/login.module.js'
import loading from './loading/loading.module.js'
import logout from './logout/logout.module.js'
import error from './error/error.module.js'
import members from './members/members.module.js'
import member from './members/member/member.module.js'
import courses from './courses/courses.module.js'
import homeRoute from './app.route.js'
import AppService from './app.service.js'
import AuthSharedService from './auth.service.js'
import Session from './session.service.js'
import runBlock from './app.run.js'


export default
  angular
    .module('mms', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ngSanitize',
      'ui.router',
      'http-auth-interceptor',
      'ngResource',
      'mdDataTable',

	    loading,
      login,
      error,
      logout,
      home,
      mmsMap,
      members,
      member,
      courses
    ])
    .constant('apiUrl', apiUrl)
    .constant('USER_ROLES', userRoles)
    .component('mmsApp', mmsApp)
    .config(homeRoute)
    .service('AppService', AppService)
    .service('AuthSharedService', AuthSharedService)
    .service('Session', Session)
    .run(runBlock)
    .directive('access', ['AuthSharedService', function (AuthSharedService) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var roles = attrs.access.split(',');
                if (roles.length > 0) {
                    if (AuthSharedService.isAuthorized(roles)) {
                        element.removeClass('hide');
                    } else {
                        element.addClass('hide');
                    }
                }
            }
        };
    }])
    .name
