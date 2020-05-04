'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Office extends Model{}
  Office.init({
    name: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    start_date: DataTypes.DATEONLY,
    CompanyId: DataTypes.INTEGER
  },{sequelize})
  Office.associate = function(models) {
    Office.belongsTo(models.Company)
    // associations can be defined here
  };
  return Office;
};