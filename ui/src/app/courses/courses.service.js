export default
/* @ngInject */
class CoursesService {
  constructor($http) {
    this.$http = $http
  }

  getAllCourses() { return this.$http.get('courses/')}

  postCourse(course) { return this.$http.post('courses/', course)}

}
