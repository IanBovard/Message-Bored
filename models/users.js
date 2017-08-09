'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'users',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};