package org.uaso.attribute;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class SkillServiceImpl implements SkillService {

	private final SkillRepository skillRepo;
	
	public SkillServiceImpl (SkillRepository skillRepo) {
		super();
		this.skillRepo = skillRepo;
	}

	@Override
	public List<Skill> index() {
		return skillRepo.findAll();
	}
}
