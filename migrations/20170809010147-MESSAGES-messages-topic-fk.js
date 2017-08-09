'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'messages',
      'Messages_topic_id_fkey',
      Sequelize.INTEGER
      );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'topics',
      'Messages_topic_id_fkey'
      );
  }
};
