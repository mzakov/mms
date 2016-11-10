package org.uaso.location;

import java.util.List;

public interface CityService {

	List<City> index();

	City create(City city);

	City read(long id);

	City update(long id, City cityToUpdate);

	City delete(long id);

}
