package org.uaso.entity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.uaso.activity.Activity;
import org.uaso.activity.ActivityRepository;

@Service
public class MemberServiceImpl implements MemberService {

	private final MemberRepository memberRepo;
	private final ActivityRepository activityRepo;
	
	@Autowired
	public MemberServiceImpl (MemberRepository memberRepo, ActivityRepository activityRepo) {
		super();
		this.memberRepo = memberRepo;
		this.activityRepo = activityRepo;
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
	public List<Activity> indexActivities(long id) {
		return activityRepo.findAllByMembers_id(id);
	}


}
