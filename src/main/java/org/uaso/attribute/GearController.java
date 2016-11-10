package org.uaso.attribute;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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

	//POST /gear
	@RequestMapping(method = RequestMethod.POST)
	public Gear create(@RequestBody Gear gear) {
		return gearService.create(gear);
	}
		
	//GET /gear/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public Gear read(@PathVariable("id") long id) {
		return gearService.read(id);
	}
	
	// PATCH /gear/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.PATCH)
	public Gear update(@PathVariable("id") long id, @RequestBody Gear gearToUpdate) {
		return gearService.update(id, gearToUpdate);
	}

	// DELETE /gear/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public Gear delete(@PathVariable("id") long id) {
		return gearService.delete(id);
	}
}
