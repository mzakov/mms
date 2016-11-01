
export default
/* ngInject */
class CourseController {
  constructor (CourseService, $log, $state, $scope, $http, $mdDialog, $stateParams, $location){
    $log.debug('CourseController instantiated!')
    let ctrl = this
    ctrl.course = {}

    $scope.loaded = false
	var city_id;
  // ctrl.skills = []
  // ctrl.gear = []
  // ctrl.members = []

  $scope.$watch('ctrl.course.city.latitude', function() {
    $scope.$broadcast('cityLL', {lat:ctrl.course.city.latitude, lng:ctrl.course.city.longitude})

  })

	CourseService.getCourse($stateParams.id).then((result) => {
		ctrl.course = result.data;
    ctrl.course.date = new Date(ctrl.course.date);
    console.dir('The birth date is: ' + ctrl.course.date);
	}).then(() => {
				CourseService.getCities().then(function(result){
					ctrl.cities = result.data;
          console.dir(result.data)
				}).then(() => {
				CourseService.getSkills().then(function(result){
					ctrl.skills = result.data;
          console.dir(result.data)
				}).then(() => {
				CourseService.getGear().then(function(result){
					ctrl.gear = result.data;
          console.dir(result.data)
				}).then(() => {
				CourseService.getEvents().then(function(result){
					ctrl.events = result.data;
          console.dir(result.data)
				}).then(() => {
				CourseService.getMembers().then(function(result){
					ctrl.members = result.data;
          console.dir(result.data)
				})
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

$scope.$on('courseLL', function (event, data) {
      ctrl.course.latitude = data.lat
      ctrl.course.longitude = data.lng
    })

	ctrl.isMember = function(group, member_id) {
		var groupIds = group.map((group) => {return group.id});
		return groupIds.includes(member_id);
	};

	ctrl.update = function(course) {
    delete course.city.value
	  CourseService.patchCourse(course).then(() => {
      ctrl.status = 'Course saved!';
    });
	}

	ctrl.post = function(course) {
		delete person.id;
		CourseService.postCourse(course);
		$state.go('courses')
	}

	ctrl.deleteCourse = function(id) {
		CourseService.deleteCourse(id).then(() => {
      $state.go('courses')
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
ctrl.repos.then(function(cities){ ctrl.allCities = cities })
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
    ctrl.repos = ctrl.allCities
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
  return CourseService.getCities()
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
          .title('Would you like to delete this course?')
          .textContent('It is irreversable')
          .ariaLabel('Delete course')
          .targetEvent(ev)
          .ok('Yes!')
          .cancel('NO');

    $mdDialog.show(confirm).then(function() {
        ctrl.deleteCourse(ctrl.course.id);
        }, function() {
            ctrl.status = 'You did not delete the course';
            });
};

//	$scope.customFilter = JSON.stringify(ctrl.person)
 	$scope.loaded = true

  }
}
