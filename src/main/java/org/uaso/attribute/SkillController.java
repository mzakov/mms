package org.uaso.attribute;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("skills")
public class SkillController {
	
	private final SkillService skillService;
	
	public SkillController (SkillService skillService) {
		super();
		this.skillService = skillService;
	}
	
	//GET /skills
	@RequestMapping(method = RequestMethod.GET)
	public List<Skill> index() {
		return skillService.index();
	}


	//POST /skills
	@RequestMapping(method = RequestMethod.POST)
	public Skill create(@RequestBody Skill skill) {
		return skillService.create(skill);
	}
		
	//GET /skills/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public Skill read(@PathVariable("id") long id) {
		return skillService.read(id);
	}
	
	// PATCH /skills/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.PATCH)
	public Skill update(@PathVariable("id") long id, @RequestBody Skill skillToUpdate) {
		return skillService.update(id, skillToUpdate);
	}

	// DELETE /skills/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public Skill delete(@PathVariable("id") long id) {
		return skillService.delete(id);
	}
}
