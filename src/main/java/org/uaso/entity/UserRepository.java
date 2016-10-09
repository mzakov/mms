package org.uaso.entity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long>{

	public User findByUserName(String username);

}
