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

}
