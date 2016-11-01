package org.uaso.activity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {

	List<Event> findAllByMembers_id(long members_id);

}
