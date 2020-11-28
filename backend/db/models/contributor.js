'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contributor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Contributor.belongsTo(models.Fund, { foreignKey: fundId });
      Contributor.belongsTo(models.User, { foreignKey: contributorId });
      Contributor.belongsTo(models.Exchange, { foreignKey: exchangeId });
    }
  };
  Contributor.init({
    fundId: DataTypes.INTEGER,
    contributorId: DataTypes.INTEGER,
    rewardId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contributor',
  });
  return Contributor;
};
