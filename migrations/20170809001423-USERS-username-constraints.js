'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addConstraint('users', ['username'], {
      type: 'unique',
      name: 'username_constraint'
    });

  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeConstraint(
      'users',
      'username_constraint');
  }
};
