export default
	/* @ngInject */
 class HomeService {
   constructor ($resource) {
     this.getTechno = function () {
            var userResource = $resource('resources/json/techno.json', {}, {
                query: {method: 'GET', params: {}, isArray: true}
            });
            return userResource.query();
        }
   }

 

}


	