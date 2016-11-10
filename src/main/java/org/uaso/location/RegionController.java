package org.uaso.location;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("regions")
public class RegionController {

	private final RegionService regionService;
	
	@Autowired
	public RegionController (RegionService regionService) {
		super();
		this.regionService = regionService;
	}
	
	//GET /regions
	@RequestMapping(method = RequestMethod.GET)
	public List<Region> index() {
		return regionService.index();
	}

	//POST /regions
	@RequestMapping(method = RequestMethod.POST)
	public Region create(@RequestBody Region region) {
		return regionService.create(region);
	}
		
	//GET /regions/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public Region read(@PathVariable("id") long id) {
		return regionService.read(id);
	}
	
	// PATCH /regions/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.PATCH)
	public Region update(@PathVariable("id") long id, @RequestBody Region regionToUpdate) {
		return regionService.update(id, regionToUpdate);
	}

	// DELETE /regions/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public Region delete(@PathVariable("id") long id) {
		return regionService.delete(id);
	}
}
