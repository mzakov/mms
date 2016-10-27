export default
/* @ngInject */
class CoursesController {
  constructor (CoursesService, $log, $scope, $location) {

    $scope.loaded = false

    $log.debug('CoursesController instantiated!')

    let ctrl = this

    //
    // let courses = []

  	ctrl.redirect = function(url, refresh) {
  		console.dir('It gets to the controller')
  		if(refresh || $scope.$$phase) {
  			$window.location.href = url;
  		} else {
  			$location.path(url);
  		}
  	}

   	CoursesService.getAllCourses().then((result) => {
   		ctrl.courses = result.data
   	})

    	// ctrl.course = {}

   	ctrl.addCourse = function(course) {
   		CoursesService.postCourse(course).then((result) => {
  			ctrl.courses.push(result.data)
        // ctrl.member = {middleName: ''}
  			ctrl.redirect('courses/' + result.data.id)
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
  		ctrl.repos.then(function(courses){ ctrl.allCourses = courses })
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
  	 			ctrl.repos = ctrl.allCourses
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
  			let courses
  			return CoursesService.getAllCourses()
  				.then(function(res) {
  				courses = res.data

  				return courses.map( function (course) {
            course.value = course.name
            return course
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
