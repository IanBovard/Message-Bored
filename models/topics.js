'use strict';
module.exports = function(sequelize, DataTypes) {
  var topics = sequelize.define('topics', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'topics'
  });
  topics.associate = function(models) {
    topics.belongsTo(models.users,  {
      foreignKey: {
        name: 'created_by',
        allowNull: false
      }
    });
    topics.hasMany(models.messages,  {
      foreignKey: {
        name: 'topic_id',
        allowNull: false
      }
    });
  };
  return topics;
};