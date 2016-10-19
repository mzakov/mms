export default
/* @ngInject */
class LogoutController {
  constructor ($log, AuthSharedService) {
	let ctrl = this
  	$log.debug('LogoutController instantiated!')
  	
  	AuthSharedService.logout();
  	}
	
}