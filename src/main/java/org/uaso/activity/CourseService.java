package org.uaso.activity;

import java.util.List;

public interface CourseService {

	List<Course> index();

	Course create(Course course);

	Course read(long id);

	Course update(long id, Course courseToUpdate);

	void delete(long id);

}
