export default
/* ngInject */
class MoreService {
  constructor($http) {
    this.$http = $http
  }

  getAllRegions() { return this.$http.get('regions/')}

  postRegion(region) { return this.$http.post('regions/', region)}

  patchRegion (region) { return this.$http.patch('regions/' + region.id, region) }

	deleteRegion (id) { return this.$http.delete('regions/' + id) }

  getAllCities() { return this.$http.get('cities/')}

  postCity(city) { return this.$http.post('cities/', city)}

  patchCity (city) { return this.$http.patch('cities/' + city.id, city) }

	deleteCity (id) { return this.$http.delete('cities/' + id) }

  getAllSkills() { return this.$http.get('skills/')}

  postSkill(skill) { return this.$http.post('skills/', skill)}

  patchSkill (skill) { return this.$http.patch('skills/' + skill.id, skill) }

	deleteSkill (id) { return this.$http.delete('skills/' + id) }

  getAllGear() { return this.$http.get('gear/')}

  postGear(gear) { return this.$http.post('gear/', gear)}

  patchGear (gear) { return this.$http.patch('gear/' + gear.id, gear) }

	deleteGear (id) { return this.$http.delete('gear/' + id) }

}
