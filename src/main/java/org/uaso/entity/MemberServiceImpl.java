package org.uaso.entity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService {

	private final MemberRepository memberRepo;
	
	@Autowired
	public MemberServiceImpl (MemberRepository memberRepo) {
		super();
		this.memberRepo = memberRepo;
	}
	
	@Override
	public List<Member> index() {
		return memberRepo.findAll();
	}

}
