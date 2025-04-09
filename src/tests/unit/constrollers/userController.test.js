const httpMocks = require('node-mocks-http');
const getUsers = require('../../../controllers/userController');

let req,res,next;
describe('User Controller', () => {
	beforeEach(() => {
		req = httpMocks.createRequest();
		res = httpMocks.createResponse();
		next = null;
	})
	it('should return success response', async () => {
		// const req = {};
		// const res = {
		// 	status: jest.fn().mockReturnThis(),
		// 	json: jest.fn()
		// };
		res.json = jest.fn();
		await getUsers(req, res);

		expect(res.statusCode).toBe(200);
		expect(res.json).toBeCalledWith({ message: 'Users fetched successfully'});
	})
});