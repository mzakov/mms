package org.uaso.location;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	
}
