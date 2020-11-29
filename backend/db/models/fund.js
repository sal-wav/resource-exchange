'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fund extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Fund.belongsTo(models.User, { foreignKey: ownerId });
      // Fund.belongsTo(models.Category, { foreignKey: categoryId });
      // Fund.hasMany(models.Exchange, { foreignKey: fundId });
      // Fund.hasMany(models.Contributor, { foreignKey: fundId });
    }
  };
  Fund.init({
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    description: DataTypes.TEXT,
    goal: DataTypes.INTEGER,
    funded: DataTypes.INTEGER,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fund',
  });
  return Fund;
};
