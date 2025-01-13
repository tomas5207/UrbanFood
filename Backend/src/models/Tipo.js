const { DataTypes } = require("sequelize");

module.exports = (dataBase) => {
  dataBase.define(
    "Tipo",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Agregados: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true, 
      },
    },
    {
      timestamps: false,
    }
  );
};