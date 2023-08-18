const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig')


const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    confirmpassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
});

module.exports = User;
