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

}
