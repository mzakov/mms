export default
/* ngInject */
class ActivityService  {
  constructor($http){
    this.$http = $http
  }
  getActivity (id) { return this.$http.get('activities/' + id) }

  getCities () { return this.$http.get('cities/') }

  getSkills () { return this.$http.get('skills/') }

  getEvents () { return this.$http.get('events/') }

  getGear () { return this.$http.get('gear/') }

  getMembers () { return this.$http.get('members/') }

	patchActivity (activity) { return this.$http.patch('activities/' + activity.id, activity) };

	postActivity (activity) { return this.$http.post('activities/', activity) };

	deleteActivity (id) { return this.$http.delete('activities/' + id) };



}
