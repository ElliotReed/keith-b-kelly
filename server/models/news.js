'use strict';

module.exports = (sequelize, DataTypes) => {
	const News = sequelize.define(
		'news',
		{
			id: {
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			text: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{ timestamps: true }
	);

	// sequelize.sync({ force: true }).then(() => {
	// 	console.log(`Database & tables created!`);
	// });

	News.associate = function (models) {
		// associations can be defined here
	};
	return News;
};
