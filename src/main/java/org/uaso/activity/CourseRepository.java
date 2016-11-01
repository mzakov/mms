package org.uaso.activity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long>{

	List<Course> findAllByMembers_id(long members_id);

}
