package org.uaso.location;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegionServiceImpl implements RegionService {

	private final RegionRepository regionRepo;
	
	@Autowired
	public RegionServiceImpl (RegionRepository regionRepo) {
		super();
		this.regionRepo = regionRepo;
	}
	
	@Override
	public List<Region> index() {
		return regionRepo.findAll();
	}

	@Override
	public Region create(Region region) {
		return regionRepo.save(region);
	}

	@Override
	public Region read(long id) {
		return regionRepo.findOne(id);
	}

	@Override
	public Region update(long id, Region regionToUpdate) {
		regionToUpdate.setId(id);
		return regionRepo.save(regionToUpdate);
	}

	@Override
	public Region delete(long id) {
		Region result = this.read(id);
		regionRepo.delete(id);
		return result;
	}
}
