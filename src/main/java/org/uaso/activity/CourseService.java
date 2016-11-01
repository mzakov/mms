package org.uaso.activity;

import java.util.List;

import org.uaso.model.GetAll;

public interface CourseService {

	List<GetAll> index();

	Course create(Course course);

	Course read(long id);

	Course update(long id, Course courseToUpdate);

	void delete(long id);

}
