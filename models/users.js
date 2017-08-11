'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: 'Username is taken.'},
      validate: {
        notEmpty: { msg: 'Incorrect Username'}
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Incorrect Password'}
      }
    },
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