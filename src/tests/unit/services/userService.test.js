const mockHttp = require('node-mocks-http');
const userService = require('../../../services/userService');

let req, res, next;
beforeEach(() => {
	req = mockHttp.createRequest();
	res = mockHttp.createResponse();
	next = null;
})
describe('Test user services', () => {
	it('should have createUser function', () => {
		expect(typeof userService.createUser).toBe('function');
	})
})