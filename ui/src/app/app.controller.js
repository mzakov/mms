
export default
/* @ngInject */
class AppController {
	constructor ($log, $http, AppService, $scope, $timeout, $location, $state, $rootScope, $mdDialog, apiUrl) {
  $log.debug('AppController instantiated!')

	this.apiUrl = apiUrl
  let ctrl = this
  this.loggedIn = AppService.loggedIn
  this.user = AppService.user
  this.users = []
  this.showProfile = false
  $scope.flights = []

  $scope.routes = []
  $scope.newBooking = {
    user: {},
    flights: []
  }
 ///////////////////////////////////////////
 $http.get(this.apiUrl + '/resource/').then(function(response) {
				ctrl.greeting = response.data
	})
 ///////////////////////////////////////////

  // this.cities = AppService.getCities().then((result) => {
  //   return result.data
  //   .map((location) => { return location.city })
  //   .map((city) => {
  //     return city
  //   })
  // })

  this.logout = function () {
    this.user = {}
    AppService.user = {}
    AppService.loggedIn = false
    $state.reload()
  }

  this.drawPath = function (item) {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    $scope.$broadcast('drawPathEvent', {
      origin: item.origin,
      destination: item.destination,
      color: color
    })
  }

  this.clearPath = function (item) {
    $scope.$broadcast('clearPathEvent', item)
  }

  this.getProfile = function () {
    AppService.getBookings(ctrl.user.id).then((result) => {
      AppService.bookings = result.data
      $scope.$broadcast('updateBookings', result.data)
    }).then(() => {
      this.showProfile = true
    })
  }

  this.getHome = function () {
    this.showProfile = false
  }

}
}
