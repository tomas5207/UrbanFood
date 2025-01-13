const {DataTypes} = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('Comida', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        imagen: {
            type: DataTypes.TEXT
        },
        descripción: {
            type: DataTypes.TEXT
        },
        precio: {
            type: DataTypes.INTEGER
        },
        favorito:{
            type: DataTypes.BOOLEAN
        }
    }, {
        timestamps: false
    }); 
};