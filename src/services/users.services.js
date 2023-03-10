const Users = require('../models/users.model');

class UserServices {

    static async getAllUsers() {
        try {
            const allUsers = await Users.findAll();
            return allUsers
        } catch (error) {
            throw(error)
        }
    }

    static async newUser(newUser){
        console.log(newUser);
        try {
            const userCreated = await Users.create(newUser);
            return userCreated
        } catch (error) {
            throw(error)
        }
    }

    static async userUpdate(userInfo, id){
       try {
        const updating = await Users.update(userInfo,{
            where: {id}
        });
        return updating
       } catch (error) {
        throw(error)
       } 
    }

    static async deletedUser(id){
        try {
            const deleting = await Users.destroy({
                where:{id}
            });
            console.log(id);
            return deleting
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = UserServices;