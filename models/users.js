'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'users'
  });
   users.associate = function(models) {
    users.hasMany(models.topics,  {
      foreignKey: {
        name: 'created_by',
        allowNull: false
      }
    });
    users.hasMany(models.messages,  {
      foreignKey: {
        name: 'author_id',
        allowNull: false
      }
    });
  };
  return users;
};