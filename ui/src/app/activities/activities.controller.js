export default
/* @ngInject */
class ActivitiesController {
  constructor (ActivitiesService, $log, $scope, $location) {

    $scope.loaded = false

    $log.debug('ActivitiesController instantiated!')

    let ctrl = this

    //
    // let activities = []

  	ctrl.redirect = function(url, refresh) {
  		console.dir('It gets to the controller')
  		if(refresh || $scope.$$phase) {
  			$window.location.href = url;
  		} else {
  			$location.path(url);
  		}
  	}

   	ActivitiesService.getAllActivities().then((result) => {
   		ctrl.activities = result.data
   	})

    	ctrl.activity = {}

   	ctrl.addActivity = function(activity) {
   		ActivitiesService.postActivity(activity).then((result) => {
        ctrl.activity = result.data;
        ctrl.activity.date = new Date(ctrl.activity.date);
  			ctrl.activities.push(ctrl.activity)
        // ctrl.member = {middleName: ''}
  			ctrl.redirect('activities/' + result.data.id)
  			// 	$state.go('members/')
  		})

   		}

   // 	ctrl.back = function() {
  	// 	 window.history.back();
  	// }

   // 	$scope.reloadRoute = function() {
   // 	   $route.reload();
   // 	}
  ////////////////////////////////////////////////////////////
  		ctrl.simulateQuery = false;
      ctrl.isDisabled    = false;

      ctrl.repos         = loadAll()
  		ctrl.repos.then(function(activities){ ctrl.activities = activities })
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
  	 			ctrl.repos = ctrl.activities
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
  			let activities
  			return ActivitiesService.getAllActivities()
  				.then(function(res) {
  				activities = res.data

  				return activities.map( function (activity) {
            activity.value = activity.name
            return activity
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
  //////////////////////////////////////////////
   	$scope.loaded = true

  }
}
