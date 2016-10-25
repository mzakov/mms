package org.uaso.activity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService{
	
	private final CourseRepository courseRepo;
	
	@Autowired
	public CourseServiceImpl (CourseRepository courseRepo) {
		super();
		this.courseRepo = courseRepo;
	}

	@Override
	public List<Course> index() {
		return courseRepo.findAll();
	}

}
