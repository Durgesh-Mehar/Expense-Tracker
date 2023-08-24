const {Sequelize} = require('sequelize')

const sequelize = require('../config/dbconfig')

const expense = sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    Amount:{
        type:Sequelize.INTEGER,
        allowNull:false
        
    },
    Description:{
        type:Sequelize.STRING,
        allowNull:false
       
    },
    Category:{
        type:Sequelize.STRING,
        allowNull:false
    } 
})

module.exports = expense;