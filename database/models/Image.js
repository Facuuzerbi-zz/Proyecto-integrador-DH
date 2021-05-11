module.exports = function(sequelize, dataTypes){
  let alias = "Image";
  let cols ={
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: dataTypes.INTEGER
        },
        type: {
          type: dataTypes.STRING,
        },
        name: {
          type: dataTypes.STRING,
        },
        data: {
          type: dataTypes.BLOB("long"),
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