'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addConstraint('topics', ['title'], {
      type: 'unique',
      name: 'title_constraint'
    });

  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeConstraint(
      'topics',
      'title_constraint');
  }
};
