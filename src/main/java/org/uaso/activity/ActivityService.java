package org.uaso.activity;

import java.util.List;

import org.uaso.model.GetAll;

public interface ActivityService {

	List<GetAll> index();

	Activity create(Activity activity);

	Activity read(long id);

	Activity update(long id, Activity activityToUpdate);

	void delete(long id);

}
