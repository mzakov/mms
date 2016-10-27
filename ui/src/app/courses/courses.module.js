import appCourses from './courses.component.js'
import CoursesService from './courses.service.js'

export default
  angular
    .module('courses', [])
    .component('appCourses', appCourses)
    .service('CoursesService', CoursesService)
    .name
