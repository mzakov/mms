import appCourse from './course.component.js'
import CourseService from './course.service.js'

export default
  angular
    .module('course', [])
    .component('appCourse', appCourse)
    .service('CourseService', CourseService)
    .name
