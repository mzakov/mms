package org.uaso.entity;

import java.util.List;

import org.uaso.activity.Course;
import org.uaso.activity.Event;

public interface MemberService {

	List<Member> index();

	Member create(Member member);

	Member read(long id);

	Member update(long id, Member memberToUpdate);

	Member delete(long id);

	List<Course> indexCourses(long id);

	List<Event> indexEvents(long id);

}
