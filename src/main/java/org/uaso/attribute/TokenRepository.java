package org.uaso.attribute;

import org.springframework.data.jpa.repository.JpaRepository;
import org.uaso.attribute.Token;

public interface TokenRepository extends JpaRepository <Token, Long>{

	Token findBySeries(String series);


}
