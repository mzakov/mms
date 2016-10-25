package org.uaso.attribute;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("gear")
public class GearController {

	private final GearService gearService;
	
	@Autowired
	public GearController (GearService gearService) {
		super();
		this.gearService = gearService;
	}
	
	//GET /gear
	@RequestMapping(method = RequestMethod.GET)
	public List<Gear> indec() {
		return gearService.index();
	}
	
}
