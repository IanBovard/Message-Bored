'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addConstraint('messages', ['Messages_topic_id_fkey'], {
      type: 'FOREIGN KEY',
      name: 'topic_fk',
      references: {
        table: 'topics',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeConstraint('messages', 'topic_fk');
  }
};
