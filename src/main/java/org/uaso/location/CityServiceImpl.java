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

	@Override
	public City create(City city) {
		return cityRepo.save(city);
	}

	@Override
	public City read(long id) {
		return cityRepo.findOne(id);
	}

	@Override
	public City update(long id, City cityToUpdate) {
		cityToUpdate.setId(id);
		return cityRepo.save(cityToUpdate);
	}

	@Override
	public City delete(long id) {
		City result = this.read(id);
		cityRepo.delete(id);
		return result;
	}

}
