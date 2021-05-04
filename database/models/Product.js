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
    active: {
      type: dataTypes.INTEGER
    },
<<<<<<< HEAD

=======
>>>>>>> 6736bd84651e08e1824706d5c27002d9be9167d7
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