'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addConstraint('messages', ['topic_id'], {
      type: 'FOREIGN KEY',
      name: 'topic_id',
      references: {
        table: 'topics',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeConstraint('messages', 'topic_id');
  }
};
