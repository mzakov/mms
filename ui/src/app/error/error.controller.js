export default
/* @ngInject */
class ErrorController {
  constructor ($stateParams, $log, AuthSharedService) {
	let ctrl = this
  	$log.debug('ErrorController instantiated!')

  	ctrl.code = $stateParams.code;

        switch (ctrl.code) {
            case "403" :
                ctrl.message = "Oops! you have come to unauthorised page."
                break;
            case "404" :
                ctrl.message = "Page not found."
                break;
            default:
                ctrl.code = 500;
                ctrl.message = "Oops! unexpected error"
        }
  }
}