'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderState extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderState.init({
    orderid: DataTypes.INTEGER,
    confirmed: DataTypes.BOOLEAN,
    delivery: DataTypes.BOOLEAN,
    payed: DataTypes.BOOLEAN,
    cancel: DataTypes.BOOLEAN,
    departuredate: DataTypes.DATE,
    confirmationdate: DataTypes.DATE,
    deliverydate: DataTypes.DATE,
    canceldate: DataTypes.DATE,
    methodpayment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrderState',
  });
  return OrderState;
};