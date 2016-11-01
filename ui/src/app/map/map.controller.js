export default
/* @ngInject */
class MapController {
  constructor (NgMap, $timeout, CourseService, $scope) {
    let ctrl = this
    // ctrl.center = [42.666280, 25.775170]
    // ctrl.zoom = 7   {lat:ctrl.course.latitude, lng:ctrl.course.longitude}
    ctrl.markers = [];

    NgMap.getMap().then(function(map) {
      ctrl.map = map;
    });

    ctrl.updateMap = function () {
    google.maps.event.trigger(ctrl.map, 'resize')
    }

    $scope.$on('cityLL', function (event, data) {
          ctrl.map.setCenter(new google.maps.LatLng(data.lat, data.lng))
          ctrl.map.setZoom(12)
        })

    ctrl.addMarker = function(event) {
        var ll = event.latLng;
        ctrl.deleteMarkers()
        ctrl.markers.push({lat:ll.lat(), lng: ll.lng()});
        $scope.$emit('courseLL', {lat:ll.lat(), lng: ll.lng()})
      }
      ctrl.deleteMarkers = function() {
        ctrl.markers = [];
      };
      ctrl.showMarkers = function() {
        for (var key in ctrl.map.markers) {
          ctrl.map.markers[key].setMap(ctrl.map);
        };
      };
      ctrl.hideMarkers = function() {
        for (var key in ctrl.map.markers) {
          ctrl.map.markers[key].setMap(null);
        };
      };
  }
}
