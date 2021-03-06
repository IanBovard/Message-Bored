'use strict';
module.exports = function(sequelize, DataTypes) {
  var messages = sequelize.define('messages', {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Can\'t post an empty message'}
      }
    }
  }, {
    tableName: 'messages'
  });
  messages.associate = function(models) {
    messages.belongsTo(models.topics,  {
      foreignKey: {
        name: 'topic_id',
        allowNull: false
      }
    });
    messages.belongsTo(models.users,  {
      foreignKey: {
        name: 'author_id',
        allowNull: false
      }
    });
  };
  return messages;
};
