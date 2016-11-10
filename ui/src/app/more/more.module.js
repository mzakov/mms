import appMore from './more.component.js'
import MoreService from './more.service.js'

export default
angular
  .module('more', [])
  .component('appMore', appMore)
  .service('MoreService', MoreService)
  .name
