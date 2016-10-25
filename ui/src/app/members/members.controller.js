
export default
/* @ngInject */
class MembersController {
	constructor ($log, MembersService, $scope, $timeout, $location, $state, $rootScope, $q) {
  $log.debug('MembersController instantiated!')

//////////////////////////////////////////////
var ctrl = this;
let members = []

ctrl.redirect = function(url, refresh) {
	console.dir('It gets to the controller')
	if(refresh || $scope.$$phase) {
			$window.location.href = url;
	} else {
			$location.path(url);
	}
}
 	MembersService.getAllMembers().then((result) => {
 		ctrl.members = result.data
 	})

 	ctrl.member = {
 	middleName: ''
 	}

 	ctrl.addMember = function(member) {
 		MembersService.postMember(member).then((result) => {
			ctrl.members.push(result.data)
	 		ctrl.member = {middleName: ''}
			ctrl.redirect('members/' + result.data.id)
			// 	$state.go('members/')
		})

 		}

 	ctrl.back = function() {
		 window.history.back();
	}

 	$scope.reloadRoute = function() {
 	   $route.reload();
 	}
////////////////////////////////////////////////////////////
		ctrl.simulateQuery = false;
    ctrl.isDisabled    = false;

    ctrl.repos         = loadAll()
		ctrl.repos.then(function(members){ ctrl.allMembers = members })
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
	 			ctrl.repos = ctrl.allMembers
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
			let members
			return MembersService.getAllMembers()
				.then(function(res) {
				members = res.data

				return members.map( function (member) {
        member.value = member.firstName.toLowerCase() + ' ' + member.lastName.toLowerCase()
        return member
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

 	$scope.loaded = true
//////////////////////////////////////////////
}
}
