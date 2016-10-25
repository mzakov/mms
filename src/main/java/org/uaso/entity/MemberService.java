package org.uaso.entity;

import java.util.List;

public interface MemberService {

	List<Member> index();

	Member create(Member member);

	Member read(long id);

	Member update(long id, Member memberToUpdate);

	Member delete(long id);

}
