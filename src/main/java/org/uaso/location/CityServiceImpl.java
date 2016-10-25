package org.uaso.location;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CityServiceImpl implements CityService{
	
	private final CityRepository cityRepo;
	
	@Autowired
	public CityServiceImpl (CityRepository cityRepo) {
		super();
		this.cityRepo = cityRepo;
	}

	@Override
	public List<City> index() {
		return cityRepo.findAll();
	}

}
