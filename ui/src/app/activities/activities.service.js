export default
/* @ngInject */
class ActivitiesService {
  constructor($http) {
    this.$http = $http
  }

  getAllActivities() { return this.$http.get('activities/')}

  postActivity(activity) { return this.$http.post('activities/', activity)}

}
