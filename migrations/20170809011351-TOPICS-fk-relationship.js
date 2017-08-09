'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addConstraint('topics', ['Topics_created_by_fkey'], {
      type: 'FOREIGN KEY',
      name: 'created_by_fk',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeConstraint('topics', 'created_by_fk');
  }
};
