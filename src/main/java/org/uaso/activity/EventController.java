package org.uaso.activity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("events")
public class EventController {
	
	private final EventService eventService ;
	
	@Autowired
	public EventController (EventService eventService) {
		super();
		this.eventService = eventService ;
	}
	
	//GET /events
	@RequestMapping(method = RequestMethod.GET)
	public List<Event> index() {
		return eventService.index();
	}

}
