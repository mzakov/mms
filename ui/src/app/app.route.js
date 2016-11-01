export default
/* @ngInject */
function routes ($stateProvider, $urlRouterProvider, $mdIconProvider, $httpProvider, USER_ROLES) {

  $stateProvider
  	.state('home', {
      url: '/home',
      component: 'appHome',
      access: {
            loginRequired: true,
            authorizedRoles: [USER_ROLES.all]
        }
    })
  	.state('login', {
      url: '/login',
      component: 'appLogin',
      access: {
            loginRequired: false,
            authorizedRoles: [USER_ROLES.all]
        }
    })
    .state('members', {
      url: '/members',
      component: 'appMembers',
      access: {
            loginRequired: true,
            authorizedRoles: [USER_ROLES.admin]
        }
    })
    .state('member', {
      url: '/members/:id',
      component: 'appMember',
      access: {
            loginRequired: true,
            authorizedRoles: [USER_ROLES.admin]
        }
    })
    .state('courses', {
      url: '/courses',
      component: 'appCourses',
      access: {
            loginRequired: true,
            authorizedRoles: [USER_ROLES.admin]
        }
    })
    .state('course', {
      url: '/courses/:id',
      component: 'appCourse',
      access: {
            loginRequired: true,
            authorizedRoles: [USER_ROLES.admin]
        }
    })
    // .state('users', {
    //   url: '/users',
    //   component: 'appUsers',
    //   data: {
    //         permissions: {
    //           only: [USER_ROLES.admin]
    //     }
    //   }
    // })
    .state('loading', {
      url: '/loading',
      component: 'appLoading',
      access: {
            loginRequired: false,
            authorizedRoles: [USER_ROLES.all]
        }
    })
    .state('logout', {
      url: '/logout',
      component: 'appLogout',
      access: {
            loginRequired: false,
            authorizedRoles: [USER_ROLES.all]
        }
    })
  	.state('error', {
      url: '/error/:code',
      component: 'appError',
      access: {
            loginRequired: false,
            authorizedRoles: [USER_ROLES.all]
        }
    })

  $urlRouterProvider.when('/', '/home');
  $urlRouterProvider.otherwise('/error/404')

  $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest'

  $mdIconProvider.fontSet('md', 'material-icons')
}
