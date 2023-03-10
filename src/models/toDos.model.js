const { DataTypes } = require('sequelize')
const db = require('../utils/database')


const ToDos = db.define('todos',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
     },
     title: {
         type: DataTypes.STRING(100),
         allowNull:false
     },
     descripction: {
         type: DataTypes.TEXT,
         allowNull:false
     },
     status: {
        type: DataTypes.STRING(30),
        defaultValue: "pending",
        allowNull:false
     },
     userId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"user_id"
    },
    categoryId:{ 
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"category_id"
    }
});

module.exports = ToDos;