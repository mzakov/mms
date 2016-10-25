package org.uaso.activity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("courses")
public class CourseController {
	
	private final CourseService courseService;
	
	@Autowired
	public CourseController (CourseService courseService) {
		super();
		this.courseService = courseService;
	}
	
	//GET /courses
	@RequestMapping(method = RequestMethod.GET)
	public List<Course> index() {
		return courseService.index();
	}
}
