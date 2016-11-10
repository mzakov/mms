
export default
/* ngInject */
class ActivityController {
  constructor (ActivityService, $log, $state, $scope, $http, $mdDialog, $stateParams, $location){
    $log.debug('ActivityController instantiated!')
    let ctrl = this
    ctrl.activity = {}

    $scope.loaded = false
	var city_id;
  // ctrl.skills = []
  // ctrl.gear = []
  // ctrl.members = []

  $scope.$watch('ctrl.activity.city.latitude', function() {
    $scope.$broadcast('cityLL', {lat:ctrl.activity.city.latitude, lng:ctrl.activity.city.longitude})

  })

	ActivityService.getActivity($stateParams.id).then((result) => {
		ctrl.activity = result.data;
    ctrl.activity.date = new Date(ctrl.activity.date);
    if(ctrl.activity.latitude && ctrl.activity.longitude) {
      $scope.$broadcast('markerLL', {lat:ctrl.activity.latitude, lng:ctrl.activity.longitude})
    }
    console.dir('The birth date is: ' + ctrl.activity.date);
	}).then(() => {
				ActivityService.getCities().then(function(result){
					ctrl.cities = result.data;
          console.dir(result.data)
				}).then(() => {
				ActivityService.getSkills().then(function(result){
					ctrl.skills = result.data;
          console.dir(result.data)
				}).then(() => {
				ActivityService.getGear().then(function(result){
					ctrl.gear = result.data;
          console.dir(result.data)
				}).then(() => {
				ActivityService.getMembers().then(function(result){
					ctrl.members = result.data;
          console.dir(result.data)
				})
        })
        })
        })
        })

        ctrl.submit = function() {
      alert('submit');
    };

ctrl.toggle = function (item, list) {
  var idx = list.indexOf(item);
  if (idx > -1) {
    list.splice(idx, 1);
  }
  else {
    list.push(item);
  }
};

$scope.$on('activityLL', function (event, data) {
      ctrl.activity.latitude = data.lat
      ctrl.activity.longitude = data.lng
    })

	ctrl.isMember = function(group, member_id) {
		var groupIds = group.map((group) => {return group.id});
		return groupIds.includes(member_id);
	};

	ctrl.update = function(activity) {
    delete activity.city.value
	  ActivityService.patchActivity(activity).then(() => {
      ctrl.status = 'Activity saved!';
    });
	}

	ctrl.post = function(activity) {
		delete person.id;
		ActivityService.postActivity(activity);
		$state.go('activities')
	}

	ctrl.deleteActivity = function(id) {
		ActivityService.deleteActivity(id).then(() => {
      $state.go('activities')
    });
	}

 	this.back = function() {
		 window.history.back();
	}

	$scope.reloadRoute = function() {
	   $route.reload();
	}

///////////////////////////////////////////////////////////////////

ctrl.simulateQuery = false;
ctrl.isDisabled    = false;

ctrl.repos         = loadAll()
ctrl.repos.then(function(cities){ ctrl.cities = cities })
ctrl.querySearch   = querySearch;
ctrl.selectedItemChange = selectedItemChange;
ctrl.searchTextChange   = searchTextChange;

// ******************************
// Internal methods
// ******************************

/**
 * Search for repos... use $timeout to simulate
 * remote dataservice call.
 */

 function querySearch (query) {
   console.dir(ctrl.repos)
    ctrl.repos = ctrl.cities
    console.dir(ctrl.repos)
     let result = query ? ctrl.repos.filter(createFilterFor(query)) : ctrl.repos
    return result
   }

function searchTextChange(text) {
  $log.info('Text changed to ' + text);
}

function selectedItemChange(item) {
  $log.info('Item changed to ' + JSON.stringify(item));
}

/**
 * Build `components` list of key/value pairs
 */
function loadAll() {
  let cities
  return ActivityService.getCities()
    .then(function(res) {
    cities = res.data

    return cities.map( function (city) {
    city.value = city.name.toLowerCase()
    return city
  })
})
}

/**
 * Create filter function for a query string
 */
function createFilterFor(query) {
  var lowercaseQuery = angular.lowercase(query);

  return function filterFn(item) {
    return (item.value.indexOf(lowercaseQuery) === 0);
  };

}



///////////////////////////////////////////////////////////////////////////

ctrl.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Would you like to delete this activity?')
          .textContent('It is irreversable')
          .ariaLabel('Delete activity')
          .targetEvent(ev)
          .ok('Yes!')
          .cancel('NO');

    $mdDialog.show(confirm).then(function() {
        ctrl.deleteActivity(ctrl.activity.id);
        }, function() {
            ctrl.status = 'You did not delete the activity';
            });
};

//	$scope.customFilter = JSON.stringify(ctrl.person)
 	$scope.loaded = true

  }
}
