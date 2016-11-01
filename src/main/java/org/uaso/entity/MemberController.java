package org.uaso.entity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.uaso.activity.Course;
import org.uaso.activity.Event;

@RestController
@RequestMapping("members")
public class MemberController {

	private final MemberService memberService;
	
	@Autowired
	public MemberController (MemberService memberService) {
		super();
		this.memberService = memberService;
	}
	//GET /members
	@RequestMapping(method = RequestMethod.GET)
	public List<Member> index() {
		return memberService.index();
	}
	
	//POST /members
	@RequestMapping(method = RequestMethod.POST)
	public Member create(@RequestBody Member member) {
		return memberService.create(member);
	}
	
	//GET /members/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public Member read(@PathVariable("id") long id) {
		return memberService.read(id);
	}
	
	// PATCH /members/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.PATCH)
	public Member update(@PathVariable("id") long id, @RequestBody Member memberToUpdate) {
		return memberService.update(id, memberToUpdate);
	}

	// DELETE /members/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public Member delete(@PathVariable("id") long id) {
		return memberService.delete(id);
	}
	
	//GET     /members/{id}/courses
	@RequestMapping(path = "/{id}/courses", method = RequestMethod.GET)
	public List<Course> indexCourses(@PathVariable("id") long id) {
		return memberService.indexCourses(id);
	}
	
	//GET     /members/{id}/events
	@RequestMapping(path = "/{id}/events", method = RequestMethod.GET)
	public List<Event> indexEvents(@PathVariable("id") long id) {
		return memberService.indexEvents(id);
	}
}
