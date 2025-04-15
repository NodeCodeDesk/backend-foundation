const userService = require('../services/userService');

const createUser = async (req, res, next) => {
	try {
		const user = await userService.createUser(req.body);
		res.status(201).json(user);
	} catch (error) {
		res.status(400).json({ message: error.message});
	}
}

const getUsers = async (req, res) => {
	const users = await userService.getAllUsers();
	res.send(200).json(users);
}

const getUser = async (req, res, next) => {
	const user = userService.getUserById(req.params.id);
	res.json(user);
}

const updateUser = async (req, res, next) => {
	const user = await userService.updateUser(req.params.id, req.body);
	if(!user) return res.status(404).json({ message: 'User not found'})
	res.json(user);
}

const deleteUser = async (req, res, next) => {
	const user = await userService.deleteUser(req.params.id);
	if(!user) res.status(404).json({ message: 'User not found'});
	res.json({ message: 'User deleted successfully!'})
}
module.exports = { createUser, getUsers, getUser, updateUser, deleteUser };