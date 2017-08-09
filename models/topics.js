'use strict';
module.exports = function(sequelize, DataTypes) {
  var topics = sequelize.define('topics', {
    title: DataTypes.STRING,
    allowNull: false
  }, {
    tableName: 'topics',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return topics;
};