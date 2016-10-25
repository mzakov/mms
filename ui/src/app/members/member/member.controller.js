export default
 /* @ngInject */
 class MemberController {
   constructor ($log, $scope, MemberService, $http , $stateParams, $location) {
 	let ctrl = this

 	$log.debug('MemberController instantiated')
    $scope.loaded = false
	var city_id;

	MemberService.getMember($stateParams.id).then((result) => {
		ctrl.member = result.data;
		return ctrl.member;
    console.dir(result.data)
	}).then(() => {
				MemberService.getCities().then(function(result){
					ctrl.cities = result.data;
          console.dir(result.data)
				}).then(() => {
				MemberService.getSkills().then(function(result){
					ctrl.skills = result.data;
          console.dir(result.data)
				}).then(() => {
				MemberService.getGear().then(function(result){
					ctrl.gear = result.data;
          console.dir(result.data)
				}).then(() => {
				MemberService.getEvents().then(function(result){
					ctrl.events = result.data;
          console.dir(result.data)
				}).then(() => {
				MemberService.getCourses().then(function(result){
					ctrl.courses = result.data;
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

// ctrl.exists = function (item, list) {
//   return list.indexOf(item) > -1;
// };


	ctrl.isMember = function(group, member_id) {
		var groupIds = group.map((group) => {return group.id});
		return groupIds.includes(member_id);
	};

	ctrl.update = function(member) {
    delete member.city.value
	  MemberService.patchMember(member);
	}

	ctrl.post = function(member) {
		delete person.id;
		MemberService.postMember(member);
		$location.url('/members')
	}

	ctrl.deleteMember = function(id) {
		MemberService.deleteMember(id);
		$location.url('/members')
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
  return MemberService.getCities()
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
//	$scope.customFilter = JSON.stringify(ctrl.person)
 	$scope.loaded = true
   }
 }
