package org.uaso.attribute;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GearServiceImpl implements GearService{
	
	private final GearRepository gearRepo;
	
	@Autowired
	public GearServiceImpl (GearRepository gearRepo) {
		super();
		this.gearRepo = gearRepo;
	}

	@Override
	public List<Gear> index() {
		return gearRepo.findAll();
	}

	@Override
	public Gear create(Gear gear) {
		return gearRepo.save(gear);
	}

	@Override
	public Gear read(long id) {
		return gearRepo.findOne(id);
	}

	@Override
	public Gear update(long id, Gear gearToUpdate) {
		gearToUpdate.setId(id);
		return gearRepo.save(gearToUpdate);
	}

	@Override
	public Gear delete(long id) {
		Gear result = this.read(id);
		gearRepo.delete(id);
		return result;
	}
}
