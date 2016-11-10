package org.uaso.activity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.uaso.model.GetAll;

@RestController
@RequestMapping("activities")
public class ActivityController {
	
	private final ActivityService activityService;
	
	@Autowired
	public ActivityController (ActivityService activityService) {
		super();
		this.activityService = activityService;
	}
	
	//GET /activities
	@RequestMapping(method = RequestMethod.GET)
	public List<GetAll> index() {
		return activityService.index();
	}
	
	//POST /activities
	@RequestMapping(method = RequestMethod.POST)
	public Activity create(@RequestBody Activity activity) {
		return activityService.create(activity);
	}
		
	//GET /activities/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public Activity read(@PathVariable("id") long id) {
		return activityService.read(id);
	}
		
	// PATCH /activities/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.PATCH)
	public Activity update(@PathVariable("id") long id, @RequestBody Activity activityToUpdate) {
		return activityService.update(id, activityToUpdate);
	}

	// DELETE /members/{id}
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") long id) {
		activityService.delete(id);
	}	
}
