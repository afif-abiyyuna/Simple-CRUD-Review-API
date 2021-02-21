'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form_Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Form_Review.init({
    nilai: DataTypes.ENUM('bintang 1','bintang 2','bintang 3','bintang 4','bintang 5'),
    nama: DataTypes.STRING,
    review: DataTypes.TEXT,
    gambar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Form_Review',
  });
  return Form_Review;
};