module.exports = function(sequelize, dataTypes){
  let alias = "Producttype";
  let cols ={
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
    },
    category: {
      type: dataTypes.STRING
    },
    detail: {
      type: dataTypes.STRING
    },
      

  }
  let config = {
      tableName: "ProductsType",
      timestamps: false
  }
  let Producttype = sequelize.define(alias, cols,config)

  Producttype.associate = function(models){
    
     
      
      
  }

  return Producttype;
}