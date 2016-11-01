package org.uaso.activity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.uaso.model.GetAll;

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
	public List<GetAll> index() {
		return courseService.index();
	}
	
	//POST /courses
	@RequestMapping(method = RequestMethod.POST)
	public Course create(@RequestBody Course course) {
		return courseService.create(course);
	}
		
	//GET /courses/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public Course read(@PathVariable("id") long id) {
		return courseService.read(id);
	}
		
	// PATCH /courses/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.PATCH)
	public Course update(@PathVariable("id") long id, @RequestBody Course courseToUpdate) {
		return courseService.update(id, courseToUpdate);
	}

	// DELETE /members/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") long id) {
		courseService.delete(id);
	}	
}
