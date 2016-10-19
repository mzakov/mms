import appLogout from './logout.component.js'
import AuthSharedService from '../auth.service.js'

export default
  angular
    .module('logout', [])
    .component('appLogout', appLogout)
    .service('AuthSharedService', AuthSharedService)
    .name