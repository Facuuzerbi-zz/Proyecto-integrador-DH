module.exports = function(sequelize, dataTypes){
  let alias = "Product";
  let cols ={
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
    },
    name: {
      type: dataTypes.STRING
    },
    productstypeid: {
      type: dataTypes.INTEGER,
    },
    category: {
      type: dataTypes.INTEGER,
    },
    description: {
      type: dataTypes.STRING
    },
    price: {
      type: dataTypes.INTEGER
    },
    potency: {
      type: dataTypes.INTEGER
    },
    autonomy: {
      type: dataTypes.INTEGER
    },
    security: {
      type: dataTypes.STRING
    },
    performancedesc: {
      type: dataTypes.STRING
    },
    exteriordesc: {
      type: dataTypes.STRING
    },
    confortdesc: {
      type: dataTypes.STRING
    },
    type: {
      type: dataTypes.STRING,
    },
    image: {
      type: dataTypes.STRING,
    },
    data: {
      type: dataTypes.BLOB("long"),
    },
    active: {
      type: dataTypes.INTEGER
    },
  }
  let config = {
      tableName: "products",
      timestamps: false
  }
  let Product = sequelize.define(alias, cols,config)

  Product.associate = function(models){
    Product.hasMany(models.Producttype, {
      as: "Producttype",
      foreignKey:"id"

  });
      
  }

  return Product;
}