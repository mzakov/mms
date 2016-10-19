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
	})


	ctrl.isMember = function(groups, group_id) {
		var groupsIds = groups.map((group) => {return group.id});
		return groupsIds.includes(group_id);
	};

	ctrl.update = function(member) {
		MemberService.patchMember(member);
	}

	ctrl.post = function(member) {
		delete person.id;
		MemberService.postMember(member);
		$location.url('/members')
	}

	ctrl.deletePerson = function(id) {
		MemberService.deleteMember(id);
		$location.url('/members')
	}

 	this.back = function() {
		 window.history.back();
	}

	$scope.reloadRoute = function() {
	   $route.reload();
	}


//	$scope.customFilter = JSON.stringify(ctrl.person)
 	$scope.loaded = true
   }
 }
