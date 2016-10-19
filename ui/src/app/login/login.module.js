import appLogin from './login.component.js'
import AuthSharedService from '../app.service.js'

export default
  angular
    .module('login', [])
    .component('appLogin', appLogin)
    .service('AuthSharedService', AuthSharedService)
    .name
