const userModel = require('../models/User.js');

const createUser = async (data) => {
	return await userModel.create(data);
}

const getAllUsers = async () => {
	return await userModel.find({});
}

const getUserById = async (id) => {
	return await userModel.findById(id);
}

const updateUser = async (id, data) => {
	return await userModel.findByIdAndUpdate(id, data, {new: true})
}

const deleteUser = async (id) => {
	return await userModel.findByIdAndDelete(id);
}
module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };