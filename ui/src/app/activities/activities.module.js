import appActivities from './activities.component.js'
import ActivitiesService from './activities.service.js'

export default
  angular
    .module('activities', [])
    .component('appActivities', appActivities)
    .service('ActivitiesService', ActivitiesService)
    .name
