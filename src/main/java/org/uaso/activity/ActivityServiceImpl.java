package org.uaso.activity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.uaso.model.GetAll;

@Service
public class ActivityServiceImpl implements ActivityService{
	
	private final ActivityRepository activityRepo;
	
	@Autowired
	public ActivityServiceImpl (ActivityRepository activityRepo) {
		super();
		this.activityRepo = activityRepo;
	}

	@Override
	public List<GetAll> index() {
		return GetAll.index(activityRepo.findAll());
	}

	@Override
	public Activity create(Activity activity) {
		return activityRepo.save(activity);
	}

	@Override
	public Activity read(long id) {
		return activityRepo.findOne(id);
	}

	@Override
	public Activity update(long id, Activity activityToUpdate) {
		activityToUpdate.setId(id);
		return activityRepo.save(activityToUpdate);
	}

	@Override
	public void delete(long id) {
//		Activity result = this.read(id);
		activityRepo.delete(id);
//		return result;
	}

}
