const httpMocks = require('node-mocks-http');
const userController = require('../../../controllers/userController');
const userModel = require('../../../models/User');
const newUserMock = require('../mock-data/new-user.json');

let req,res,next;
beforeEach(()=> {
userModel.find = jest.fn();
userModel.create = jest.fn();
userModel.findByIdAndUpdate = jest.fn();
})
describe('User Controller', () => {
	beforeEach(() => {
		req = httpMocks.createRequest();
		res = httpMocks.createResponse();
		next = null;
	})
	it('should return success response', async () => {
		await userController.getUsers(req, res);

		expect(res.statusCode).toBe(200);
		expect(userModel.find).toBeCalledWith({});
	});

	it('should create user', async () => {
		req.body = newUserMock;
		await userController.createUser(req,res,next);
		expect(res.statusCode).toBe(201);
		expect(userModel.create).toBeCalledWith(newUserMock);
	});

	it("should update user", async () => {
		req.params.id = '67f13293bcf108a89052e3e0';
		req.body = newUserMock;
		await userController.updateUser(req,res,next);
		expect(userModel.findByIdAndUpdate).toBeCalledWith('67f13293bcf108a89052e3e0',newUserMock, {new: true});
	})
});