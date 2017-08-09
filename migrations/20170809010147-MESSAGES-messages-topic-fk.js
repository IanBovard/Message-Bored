'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'messages',
      'topic_id',
      Sequelize.INTEGER
      );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'topics',
      'topic_id'
      );
  }
};
