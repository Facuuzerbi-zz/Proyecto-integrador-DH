module.exports = function(sequelize, dataTypes){
  let alias = "Userrol";
  let cols ={
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: dataTypes.INTEGER
        },
        roltype: {
          type: dataTypes.STRING
          
        },
      

  }
  let config = {
      tableName: "userRol",
      timestamps: false
  }
  let Userrol = sequelize.define(alias, cols,config)

  Userrol.associate = function(models){
     
      
      
  }

  return Userrol;
}