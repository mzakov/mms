
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
 		MembersService.postMember(member)
 		ctrl.members.push(member)
 		ctrl.member = {middleName: ''}
 		$state.go('members')
 		}

 	ctrl.back = function() {
		 window.history.back();
	}

 	$scope.reloadRoute = function() {
 	   $route.reload();
 	}

 	//	Autocompele //////////////////////////////////////////////////////////

	var pendingSearch, cancelSearch = angular.noop;
    var cachedQuery, lastSearch;

		function loadMembers() {
			let members
			return MembersService.getAllMembers()
				.then(function(res) {
				members = res.data
				return members.map(function (m, index) {
							var member = {
								name: m.firstName + ' ' + m.lastName,
								email: m.email,
								image: 'http://lorempixel.com/50/50/people?' + index
							};
							member._lowername = member.name.toLowerCase();
							return member;
						});
					})
					// .error(function(error) {
					// 	console.dir("Error:"+error)
					// })
				}

    ctrl.allMembers = loadMembers();
		console.dir(ctrl.allMembers)
		ctrl.allMembers.then(function(members){
			ctrl.allMems = members
		})
    // ctrl.members = [ctrl.allMembers[0]];
    ctrl.asyncMembers = [];
    ctrl.filterSelected = true;

    ctrl.querySearch = querySearch;
    ctrl.delayedQuerySearch = delayedQuerySearch;
		/**
		 * Search for members; use a random delay to simulate a remote call
		 */

		 function querySearch (criteria) {
			ctrl.allMembers = ctrl.allMems
			console.dir(ctrl.allMembers)
      cachedQuery = cachedQuery || criteria;
      let result = cachedQuery ? ctrl.allMembers.filter(createFilterFor(cachedQuery)) : [];
			return result
    }

		/**
		 * Async search for members
		 * Also debounce the queries; since the md-contact-chips does not support this
		 */
		function delayedQuerySearch(criteria) {
		      cachedQuery = criteria;
		      if ( !pendingSearch || !debounceSearch() )  {
		        cancelSearch();

		        return pendingSearch = $q(function(resolve, reject) {
		          // Simulate async search... (after debouncing)
		          cancelSearch = reject;
		          $timeout(function() {

		            resolve( ctrl.querySearch() );

		            refreshDebounce();
		          }, Math.random() * 500, true)
		        });
		      }

		      return pendingSearch;
		    }

		function refreshDebounce() {
		      lastSearch = 0;
		      pendingSearch = null;
		      cancelSearch = angular.noop;
		    }

		    /**
		     * Debounce if querying faster than 300ms
		     */
		function debounceSearch() {
		      var now = new Date().getMilliseconds();
		      lastSearch = lastSearch || now;

		      return ((now - lastSearch) < 300);
		    }

		    /**
		     * Create filter function for a query string
		     */
		function createFilterFor(query) {
		      var lowercaseQuery = angular.lowercase(query);

		      return function filterFn(member) {
		        return (member._lowername.indexOf(lowercaseQuery) != -1);;
		      };

		    }


// End of autocomplete ///////////////////////////////////////////////////

 	$scope.loaded = true
//////////////////////////////////////////////
}
}
