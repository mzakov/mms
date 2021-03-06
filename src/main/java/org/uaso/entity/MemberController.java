package org.uaso.entity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.uaso.activity.Activity;

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
	
	//GET     /members/{id}/activities
	@RequestMapping(path = "/{id}/activities", method = RequestMethod.GET)
	public List<Activity> indexActivities(@PathVariable("id") long id) {
		return memberService.indexActivities(id);
	}
	
}
