'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn('users', 'birth_date', {
			type: Sequelize.DATE
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.addColumn('users', 'birth_date');
	}
};
