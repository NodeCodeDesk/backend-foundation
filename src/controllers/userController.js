
const getUsers = (req, res) => {
	res.send(200).json({ message: 'Users fetched successfully'});
}

module.exports = getUsers;