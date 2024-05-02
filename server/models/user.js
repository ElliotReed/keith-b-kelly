'use strict';

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'user',
		{
			id: {
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			refreshToken: {
				type: DataTypes.STRING,
				allowNull: true,
			},
		},
		{ timestamps: false }
	);

	User.associate = function (models) {};

	return User;
};
