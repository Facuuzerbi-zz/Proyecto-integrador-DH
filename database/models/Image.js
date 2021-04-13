module.exports = function(sequelize, dataTypes){
  let alias = "Image";
  let cols ={
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: dataTypes.INTEGER
        },
        image: {
          type: dataTypes.STRING
          
        },
      

  }
  let config = {
      tableName: "image",
      timestamps: false
  }
  let Image = sequelize.define(alias, cols,config)

  Image.associate = function(models){
      
  }

  return Image;
}