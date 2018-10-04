'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Contacts', 'email', {
      type: Sequelize.STRING,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contacts', 'email');
  }
};
