'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addConstraint('topics', ['created_by'], {
      type: 'FOREIGN KEY',
      name: 'created_by',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeConstraint('topics', 'created_by');
  }
};
