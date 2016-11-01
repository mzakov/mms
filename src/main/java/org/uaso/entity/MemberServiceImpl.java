package org.uaso.entity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.uaso.activity.Course;
import org.uaso.activity.CourseRepository;
import org.uaso.activity.Event;
import org.uaso.activity.EventRepository;

@Service
public class MemberServiceImpl implements MemberService {

	private final MemberRepository memberRepo;
	private final CourseRepository courseRepo;
	private final EventRepository eventRepo;
	
	@Autowired
	public MemberServiceImpl (MemberRepository memberRepo, CourseRepository courseRepo, EventRepository eventRepo) {
		super();
		this.memberRepo = memberRepo;
		this.courseRepo = courseRepo;
		this.eventRepo = eventRepo;
	}
	
	@Override
	public List<Member> index() {
		return memberRepo.findAll();
	}
	
	@Override
	public Member create(Member member) {
		return memberRepo.save(member);
	}

	@Override
	public Member read(long id) {
		return memberRepo.findOne(id);
	}

	@Override
	public Member update(long id, Member memberToUpdate) {
		memberToUpdate.setId(id);
		return memberRepo.save(memberToUpdate);
	}

	@Override
	public Member delete(long id) {
		Member result = this.read(id);
		memberRepo.delete(id);
		return result;
	}

	@Override
	public List<Course> indexCourses(long id) {
		return courseRepo.findAllByMembers_id(id);
	}

	@Override
	public List<Event> indexEvents(long id) {
		return eventRepo.findAllByMembers_id(id);
	}

}
