const { DataTypes } = require('sequelize');
const db = require('../utils/database')

const Categories = db.define('Categories',{
    id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    allowNull:false
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull:false
    }
});

module.exports = Categories;