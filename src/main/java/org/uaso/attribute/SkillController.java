package org.uaso.attribute;

import java.util.List;

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

}
