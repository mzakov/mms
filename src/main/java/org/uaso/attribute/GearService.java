package org.uaso.attribute;

import java.util.List;

public interface GearService {

	List<Gear> index();

	Gear create(Gear gear);

	Gear read(long id);

	Gear update(long id, Gear gearToUpdate);

	Gear delete(long id);

}
