'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'topics',
      'Topics_created_by_fkey',
      Sequelize.INTEGER
      );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'topics',
      'Topics_created_by_fkey');
  }
};
