package org.uaso.activity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.uaso.model.GetAll;

@Service
public class CourseServiceImpl implements CourseService{
	
	private final CourseRepository courseRepo;
	
	@Autowired
	public CourseServiceImpl (CourseRepository courseRepo) {
		super();
		this.courseRepo = courseRepo;
	}

	@Override
	public List<GetAll> index() {
		return GetAll.index(courseRepo.findAll());
	}

	@Override
	public Course create(Course course) {
		return courseRepo.save(course);
	}

	@Override
	public Course read(long id) {
		return courseRepo.findOne(id);
	}

	@Override
	public Course update(long id, Course courseToUpdate) {
		courseToUpdate.setId(id);
		return courseRepo.save(courseToUpdate);
	}

	@Override
	public void delete(long id) {
//		Course result = this.read(id);
		courseRepo.delete(id);
//		return result;
	}

}
