export default
	/* @ngInject */
 class MemberService {
	constructor($http) {
		this.$http = $http
	}

	getMember (id) { return this.$http.get('members/' + id) }

  getCities () { return this.$http.get('cities/') }

  getSkills () { return this.$http.get('skills/') }

  getGear () { return this.$http.get('gear/') }

  getMemberActivities (id) { return this.$http.get('members/' + id + '/activities/') }

	patchMember (member) { return this.$http.patch('members/' + member.id, member) };

	postMember (member) { return this.$http.post('members/', member) };

	deleteMember (id) { return this.$http.delete('members/' + id) };

}
