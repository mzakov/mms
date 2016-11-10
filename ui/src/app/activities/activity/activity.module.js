import appActivity from './activity.component.js'
import ActivityService from './activity.service.js'

export default
  angular
    .module('activity', [])
    .component('appActivity', appActivity)
    .service('ActivityService', ActivityService)
    .name
