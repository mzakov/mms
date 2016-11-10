export default
 /* @ngInject */
 class MemberController {
   constructor ($log, $state, $scope, MemberService, $http, $mdDialog, $stateParams, $location) {
 	let ctrl = this

 	$log.debug('MemberController instantiated')
    $scope.loaded = false
	var city_id;
  // ctrl.skills = []
  // ctrl.gear = []
  // ctrl.activities = []

	MemberService.getMember($stateParams.id).then((result) => {
		ctrl.member = result.data;
    ctrl.member.birthDate = new Date(ctrl.member.birthDate);
    console.dir('The birth date is: ' + ctrl.member.birthDate);
		return ctrl.member;
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
				MemberService.getMemberActivities($stateParams.id).then(function(result){
					ctrl.memberActivities = result.data;
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

// ctrl.exists = function (item, list) {
//   return list.indexOf(item) > -1;
// };


	ctrl.isMember = function(group, member_id) {
		var groupIds = group.map((group) => {return group.id});
		return groupIds.includes(member_id);
	};

	ctrl.update = function(member) {
    delete member.city.value
	  MemberService.patchMember(member).then(() => {
      ctrl.status = 'Member saved!';
    });
	}

	ctrl.post = function(member) {
		delete person.id;
		MemberService.postMember(member);
		$state.go('members')
	}

	ctrl.deleteMember = function(id) {
		MemberService.deleteMember(id).then(() => {
      $state.go('members')
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

ctrl.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Would you like to delete this member?')
          .textContent('It is irreversable')
          .ariaLabel('Delete member')
          .targetEvent(ev)
          .ok('Yes!')
          .cancel('NO');

    $mdDialog.show(confirm).then(function() {
        ctrl.deleteMember(ctrl.member.id);
        }, function() {
            ctrl.status = 'You did not delete the member';
            });
};

//	$scope.customFilter = JSON.stringify(ctrl.person)
 	$scope.loaded = true
   }
 }
