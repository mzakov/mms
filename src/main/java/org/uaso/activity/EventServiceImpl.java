package org.uaso.activity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventServiceImpl implements EventService{

	private final EventRepository eventRepo;
	
	@Autowired
	public EventServiceImpl (EventRepository eventRepo) {
		super();
		this.eventRepo = eventRepo;
	}

	@Override
	public List<Event> index() {
		return eventRepo.findAll();
	}
	
}
