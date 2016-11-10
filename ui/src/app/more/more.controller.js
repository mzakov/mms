export default
/* ngInject */
class MoreController {
  constructor($log, MoreService, $mdDialog, $state){

    $log.debug('MoreController instantiated!')
    let ctrl = this

    MoreService.getAllCities().then(function(result){
      ctrl.cities = result.data;
      console.dir(result.data)
    }).then(() => {
    MoreService.getAllSkills().then(function(result){
      ctrl.skills = result.data;
      console.dir(result.data)
    }).then(() => {
    MoreService.getAllGear().then(function(result){
      ctrl.listGear = result.data;
      console.dir(result.data)
    }).then(() => {
    MoreService.getAllRegions().then(function(result){
      ctrl.regions = result.data;
      console.dir(result.data)
    })
    })
    })
    })

    ctrl.addSkill = function(item) {
   		MoreService.postSkill(item).then((result) => {
        ctrl.skill = result.data;
  			ctrl.skills.push(ctrl.skill)
        ctrl.status = 'Skill saved!'
  		})
    }

      ctrl.addGear = function(item) {
     		MoreService.postGear(item).then((result) => {
          ctrl.gear = result.data;
    			ctrl.listGear.push(ctrl.gear)
          ctrl.status = 'Gear saved!'
    		})
}
        ctrl.addCity = function(item) {
       		MoreService.postCity(item).then((result) => {
            ctrl.city = result.data;
      			ctrl.cities.push(ctrl.city)
            ctrl.status = 'City saved!'
      		})
}
          ctrl.addRegion = function(item) {
            MoreService.postRegion(item).then((result) => {
              ctrl.region = result.data;
              ctrl.regions.push(ctrl.region)
              ctrl.status = 'Region saved!'
            })
}
ctrl.deleteSkill = function(id) {
  MoreService.deleteSkill(id).then(() => {
    ctrl.skills.splice(ctrl.skills.indexOf(ctrl.selectedSkill), 1)
    ctrl.status = 'Skill deleted!';
  });
}
ctrl.updateSkill = function(item) {
  MoreService.patchSkill(item).then(() => {
    ctrl.status = 'Skill saved!';
  });
}

ctrl.deleteGear = function(id) {
  MoreService.deleteGear(id).then(() => {
    ctrl.listGear.splice(ctrl.listGear.indexOf(ctrl.selectedGear), 1)
    ctrl.status = 'Gear deleted!';
  });
}
ctrl.updateGear = function(item) {
  MoreService.patchGear(item).then(() => {
    ctrl.status = 'Gear saved!';
  });
}

ctrl.deleteCity = function(id) {
  MoreService.deleteCity(id).then(() => {
    ctrl.cities.splice(ctrl.cities.indexOf(ctrl.selectedCity), 1)
    ctrl.status = 'City deleted!';
  });
}
ctrl.updateCity = function(item) {
  MoreService.patchCity(item).then(() => {
    ctrl.status = 'City saved!';
  });
}

ctrl.deleteRegion = function(id) {
  MoreService.deleteRegion(id).then(() => {
    ctrl.regions.splice(ctrl.regions.indexOf(ctrl.selectedRegionEdit), 1)
    ctrl.status = 'Region deleted!';
  });
}
ctrl.updateRegion = function(item) {
  MoreService.patchRegion(item).then(() => {
    ctrl.status = 'Region saved!';
  });
}
    ////////////////////////////////////////////////////////////
        ctrl.repos         = loadAll()
    		ctrl.repos.then(function(regions){ ctrl.regions = regions })
    		ctrl.querySearch   = querySearch;

        ctrl.selectedItemChange = selectedItemChange;
        ctrl.searchTextChange   = searchTextChange;

    		 function querySearch (query) {
    	 			ctrl.repos = ctrl.regions
    				 let result = query ? ctrl.repos.filter(createFilterFor(query)) : ctrl.repos
    	 			return result
    	     }

        function searchTextChange(text) {
          $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
          $log.info('Item changed to ' + JSON.stringify(item));
        }

        function loadAll() {
    			let regions
    			return MoreService.getAllRegions()
    				.then(function(res) {
    				regions = res.data

    				return regions
            })
    	   }

        function createFilterFor(query) {
          var lowercaseQuery = angular.lowercase(query);

          return function filterFn(item) {
            return (item.name.indexOf(lowercaseQuery) === 0);
          };

        }
    //////////////////////////////////////////////
    ctrl.skillsRepo         = loadAllSkills()
    ctrl.skillsRepo.then(function(result){ ctrl.skills = result })
    ctrl.querySearchSkills   = querySearchSkills;
    function querySearchSkills (query) {
       ctrl.skillsRepo = ctrl.skills
        let result = query ? ctrl.skillsRepo.filter(createFilterFor(query)) : ctrl.skillsRepo
       return result
      }
    function loadAllSkills() {
     let result
     return MoreService.getAllSkills()
       .then(function(res) {
       result = res.data
       return result
       })
    }
    //////////////////////////////////////////////////

    ctrl.gearRepo         = loadAllGear()
    ctrl.gearRepo.then(function(result){ ctrl.gear = result })
    ctrl.querySearchGear   = querySearchGear;
    function querySearchGear (query) {
       ctrl.gearRepo = ctrl.gear
        let result = query ? ctrl.gearRepo.filter(createFilterFor(query)) : ctrl.gearRepo
       return result
      }
    function loadAllGear() {
     let result
     return MoreService.getAllGear()
       .then(function(res) {
       result = res.data
       return result
     })
    }

    //////////////////////////////////////////////////

    ctrl.citiesRepo         = loadAllCities()
    ctrl.citiesRepo.then(function(result){ ctrl.cities = result })
    ctrl.querySearchCities   = querySearchCities;
    function querySearchCities (query) {
       ctrl.citiesRepo = ctrl.cities
        let result = query ? ctrl.citiesRepo.filter(createFilterFor(query)) : ctrl.citiesRepo
       return result
      }
    function loadAllCities() {
     let result
     return MoreService.getAllCities()
       .then(function(res) {
       result = res.data
       return result
       })
    }

////////////////////////////////////////////////////////
    ctrl.showConfirmSkill = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
              .title('Would you like to delete this skill?')
              .textContent('It is irreversable')
              .ariaLabel('Delete skill')
              .targetEvent(ev)
              .ok('Yes!')
              .cancel('NO');

        $mdDialog.show(confirm).then(function() {
            ctrl.deleteSkill(ctrl.selectedSkill.id);
            }, function() {
                ctrl.status = 'You did not delete a skill';
                });
    };

    ctrl.showConfirmGear = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
              .title('Would you like to delete this peace of gear?')
              .textContent('It is irreversable')
              .ariaLabel('Delete gear')
              .targetEvent(ev)
              .ok('Yes!')
              .cancel('NO');

        $mdDialog.show(confirm).then(function() {
            ctrl.deleteGear(ctrl.selectedGear.id);
            }, function() {
                ctrl.status = 'You did not delete a peace of gear';
                });
    };

    ctrl.showConfirmCity = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
              .title('Would you like to delete this city?')
              .textContent('It is irreversable')
              .ariaLabel('Delete city')
              .targetEvent(ev)
              .ok('Yes!')
              .cancel('NO');

        $mdDialog.show(confirm).then(function() {
            ctrl.deleteCity(ctrl.selectedCity.id);
            }, function() {
                ctrl.status = 'You did not delete a city';
                });
    };

    ctrl.showConfirmRegion = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
              .title('Would you like to delete this region?')
              .textContent('It is irreversable')
              .ariaLabel('Delete region')
              .targetEvent(ev)
              .ok('Yes!')
              .cancel('NO');

        $mdDialog.show(confirm).then(function() {
            ctrl.deleteRegion(ctrl.selectedRegionEdit.id);
            }, function() {
                ctrl.status = 'You did not delete a region';
                });
    };

  }
}
