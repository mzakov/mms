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
	@Override
	public Skill create(Skill skill) {
		return skillRepo.save(skill);
	}

	@Override
	public Skill read(long id) {
		return skillRepo.findOne(id);
	}

	@Override
	public Skill update(long id, Skill skillToUpdate) {
		skillToUpdate.setId(id);
		return skillRepo.save(skillToUpdate);
	}

	@Override
	public Skill delete(long id) {
		Skill result = this.read(id);
		skillRepo.delete(id);
		return result;
	}
}
