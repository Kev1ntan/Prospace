'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Company extends Model{}
  Company.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    revenue: DataTypes.INTEGER,
    phone: DataTypes.STRING
  },{sequelize})
  Company.associate = function(models) {
    // associations can be defined here
    Company.hasMany(models.Office)
  };
  return Company;
};