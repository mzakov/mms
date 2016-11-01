export default
/* ngInject */
class CourseService  {
  constructor($http){
    this.$http = $http
  }
  getCourse (id) { return this.$http.get('courses/' + id) }

  getCities () { return this.$http.get('cities/') }

  getSkills () { return this.$http.get('skills/') }

  getEvents () { return this.$http.get('events/') }

  getGear () { return this.$http.get('gear/') }

  getMembers () { return this.$http.get('members/') }

	patchCourse (course) { return this.$http.patch('courses/' + course.id, course) };

	postCourse (course) { return this.$http.post('courses/', course) };

	deleteCourse (id) { return this.$http.delete('courses/' + id) };



}
