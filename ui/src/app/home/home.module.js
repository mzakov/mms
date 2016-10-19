import appHome from './home.component.js'
import HomeService from './home.service.js'

export default
  angular
    .module('home', [])
    .component('appHome', appHome)
    .service('HomeService', HomeService)
    .name
