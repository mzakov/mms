package org.uaso.activity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<Activity, Long>{

	List<Activity> findAllByMembers_id(long members_id);

}
