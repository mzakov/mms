package org.uaso.entity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("members")
public class MemberController {

	private final MemberService memberService;
	
	@Autowired
	public MemberController (MemberService memberService) {
		super();
		this.memberService = memberService;
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Member> index() {
		return memberService.index();
	} 
}
