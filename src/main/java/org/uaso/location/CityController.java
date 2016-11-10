package org.uaso.location;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("cities")
public class CityController {
	
	private final CityService cityService;
	
	@Autowired
	public CityController (CityService cityService) {
		super();
		this.cityService = cityService;
	}
	
	//GET /cities
	@RequestMapping(method = RequestMethod.GET)
	public List<City> index() {
		return cityService.index();
	}
	
	//POST /cities
	@RequestMapping(method = RequestMethod.POST)
	public City create(@RequestBody City city) {
		return cityService.create(city);
	}
		
	//GET /cities/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public City read(@PathVariable("id") long id) {
		return cityService.read(id);
	}
	
	// PATCH /cities/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.PATCH)
	public City update(@PathVariable("id") long id, @RequestBody City cityToUpdate) {
		return cityService.update(id, cityToUpdate);
	}

	// DELETE /cities/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public City delete(@PathVariable("id") long id) {
		return cityService.delete(id);
	}
}
