'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contributer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Contributer.init({
    fundId: DataTypes.INTEGER,
    contributerId: DataTypes.INTEGER,
    rewardId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contributer',
  });
  return Contributer;
};