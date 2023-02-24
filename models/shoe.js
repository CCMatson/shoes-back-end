'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shoe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Shoe.belongsTo(models.Profile, { foreignKey: 'shoeId' })
      Shoe.belongsTo(models.Profile, { foriegnKey: 'profileId' })
      // define association here
    }
  }
  Shoe.init({
    style: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id'
      }
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    info: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'Shoe',
  });
  return Shoe;
};