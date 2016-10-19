export default
	/* @ngInject */
 class AppService {
   constructor ($http, apiUrl) {
     this.$http = $http
     this.apiUrl = apiUrl
     this.user = {}
     this.loggedIn = false
     this.bookings = []
   }

   login (user) {
     return this.$http.post(this.apiUrl + '/users/login/', user)
   }

   register (user) {
     user.password = bcrypt.hashSync(user.password, 10)
     return this.$http.post(this.apiUrl + '/users/', user)
   }

}
