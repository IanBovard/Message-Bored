'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addConstraint('messages', ['Messages_author_id_fkey'], {
      type: 'FOREIGN KEY',
      name: 'author_fk',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeConstraint('messages', 'author_fk');
  }
};
