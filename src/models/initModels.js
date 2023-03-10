const Users = require('./users.model');
const Posts = require('./toDos.model');
const Categories = require('./categories.model');


const initModels = () =>{

    Users.hasMany(Posts, { foreignKey: 'userId'});
    Posts.belongsTo(Users, {foreignKey: 'userId'});

    Categories.hasMany(Posts, {foreignKey: 'categoryId'});
    Posts.belongsTo(Categories, {foreignKey: 'categoryId'});

};

module.exports= initModels;