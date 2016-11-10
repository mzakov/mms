package org.uaso.attribute;

import java.util.List;

public interface SkillService {

	List<Skill> index();

	Skill create(Skill skill);

	Skill read(long id);

	Skill update(long id, Skill skillToUpdate);

	Skill delete(long id);

}
