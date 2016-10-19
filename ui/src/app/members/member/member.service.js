export default
	/* @ngInject */
 class MemberService {
	constructor($http) {
		this.$http = $http
	}

	getMember (id) { return this.$http.get('members/' + id) };

	patchMember (person) { return this.$http.patch('members/' + person.id, person) };

	postMember (person) { return this.$http.post('members/', person) };

	deleteMember (id) { return this.$http.delete('members/' + id) };

	// getInterests () { return this.$http.get('interests/') };
	//
	// getCityGroups (city_id) { return this.$http.get('cities/' + city_id + '/groups/')};
	//
	// getAllGroups () { return this.$http.get('groups/')};
	//
	// getCities () { return this.$http.get('cities/')};
	//
	// getStates () { return this.$http.get('states/')};
	//
//	isMember (groups, group_id) {
//		var groupsIds = groups.map((group) => {return group.id});
//		return groupsIds.includes(group_id);
//	};
}
