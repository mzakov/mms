import mmsMap from './map/map.module'
import apiUrl from './api.url'
import mmsApp from './app.component.js'
import login from './login/login.module.js'
import user from './user/user.module.js'
import homeRoute from './app.route.js'
import AppService from './app.service.js'

export default
  angular
    .module('mms', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ui.router',

      login,
      mmsMap,
      user
    ])
    .constant('apiUrl', apiUrl)
    .component('mmsApp', mmsApp)
    .config(homeRoute)
    .service('AppService', AppService)
    .name
