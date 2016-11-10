package org.uaso.location;

import java.util.List;

public interface RegionService {

	List<Region> index();

	Region create(Region region);

	Region read(long id);

	Region update(long id, Region regionToUpdate);

	Region delete(long id);

}
