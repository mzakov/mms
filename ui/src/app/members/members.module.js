import appMembers from './members.component.js'
import MembersService from './members.service.js'

export default
  angular
    .module('members', [])
    .component('appMembers', appMembers)
    .service('MembersService', MembersService)
    .name
