const UserServices = require ('../services/users.services');

const getAllUsers = async(req,res) => {
    try {
        const users = await UserServices.getAllUsers();
        res.json(users)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createUser = async(req,res) => {
    try {
        const newUser = req.body;
        const User = await UserServices.newUser(newUser);
        res.status(201).json(User)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userInfo = req.body;
        await UserServices.userUpdate(userInfo, id)
        res.status(201).send('Updated')
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteUser = async (req,res) => {   //! no sirve
    try {
        const {id} = req.params;
        await UserServices.deletedUser(id);
        res.status(204).send('Deleted')
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
}

