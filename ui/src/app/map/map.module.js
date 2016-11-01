import mapLocations from './map.locations'
import mapComponent from './map.component.js'
import mapService from './map.service'

export default
  angular
    .module('mms.map', ['ngMap'])
    .constant('locations', mapLocations)
    .component('mmsMap', mapComponent)
    .service('mapService', mapService)
    .name
