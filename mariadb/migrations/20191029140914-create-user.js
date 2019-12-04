'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			uid: {
				type: Sequelize.BIGINT.UNSIGNED,
				allowNull: false,
				unique: true
			},
			first_name: {
				type: Sequelize.STRING(70),
				allowNull: false
			},
			middle_name: {
				type: Sequelize.STRING(70)
			},
			last_name: {
				type: Sequelize.STRING(70)
			},
			phone: {
				type: Sequelize.BIGINT.UNSIGNED,
				unique: true
			},
			password: {
				type: Sequelize.CHAR(60),
				allowNull: false
			},
			salt: {
				type: Sequelize.CHAR(5),
				allowNull: false
			},
			state: {
				type: Sequelize.TINYINT.UNSIGNED,
				allowNull: false
			},
			gender: {
				type: Sequelize.BOOLEAN
			},
			country: {
				type: Sequelize.STRING(100)
			},
			city: {
				type: Sequelize.STRING(100)
			},
			last_visit: {
				type: Sequelize.DATE
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	}
};
