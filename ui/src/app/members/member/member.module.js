import appMember from './member.component.js'
import MemberService from './member.service.js'

export default
	angular
		.module('member', [])
		.component('appMember', appMember)
		.service('MemberService', MemberService)
		.name
