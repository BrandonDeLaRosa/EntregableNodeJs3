const Users = require('./users.model');
const Posts = require('./toDos.model');
const Categories = require('./categories.model');


const initModels = () =>{

    Users.hasMany(Posts, { foreignKey: 'user_id'});
    Posts.belongsTo(Users, {foreignKey: 'user_id'});

    Categories.hasMany(Posts, {foreignKey: 'category_id'});
    Posts.belongsTo(Categories, {foreignKey: 'category_id'});

};

module.exports= initModels;