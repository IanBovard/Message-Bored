'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'messages',
      'Messages_author_id_fkey',
      Sequelize.INTEGER
      );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'topics',
      'Messages_author_id_fkey'
      );
  }
};
