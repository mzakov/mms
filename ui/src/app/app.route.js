export default
/* @ngInject */
function routes ($stateProvider, $urlRouterProvider, $mdIconProvider, $httpProvider) {
  $urlRouterProvider.otherwise('home')
  $mdIconProvider.fontSet('md', 'material-icons')
  $stateProvider
    .state('home', {
      url: '/home',
      component: 'mmsApp'
    })

  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
}
