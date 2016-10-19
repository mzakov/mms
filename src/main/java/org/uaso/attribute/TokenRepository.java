package org.uaso.attribute;

import org.springframework.data.jpa.repository.JpaRepository;
import org.uaso.attribute.Token;
import org.uaso.entity.User;

public interface TokenRepository extends JpaRepository <Token, Long>{

	Token findBySeries(String series);


}
