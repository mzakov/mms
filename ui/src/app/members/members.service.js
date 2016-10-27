export default
/* @ngInject */
 class MembersService {
	constructor($http) {
		this.$http = $http
	}

	getAllMembers() { return this.$http.get('members/')}
  
	postMember(member) { return this.$http.post('members/', member)}
}
