'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Exchange.belongsTo(models.Fund, { foreignKey: fundId });
      // Exchange.hasMany(models.Contributor, { foreignKey: exchangeId });
    }
  };
  Reward.init({
    fundId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reward',
  });
  return Reward;
};
