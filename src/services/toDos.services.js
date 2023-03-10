const ToDos = require('../models/toDos.model');

class ToDosServices {
    static async getAllToDos(){
       try {
        const getAll = await ToDos.findAll();
        return getAll
       } catch (error) {
        throw(error)
       }
    }

    static async toDoCreate(newToDo){
        try {
            const creating = await ToDos.create(newToDo);
            return creating
        } catch (error) {
            throw(error)
        }
    }


    static async updateTask(id, toDoInfo){
        try {
         const updating = await ToDos.update(toDoInfo, {
            where: {id}
         });
         return updating
        } catch (error) {
            throw(error)
        }
    }

    static async deleteTask(id){
        try {
         const deleting = await ToDos.destroy({
            where:{id}
         });
         return deleting
        } catch (error) {
          throw(error)  
        }
    }
}

module.exports = ToDosServices;