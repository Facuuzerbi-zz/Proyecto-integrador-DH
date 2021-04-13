module.exports = function(sequelize, dataTypes){
    let alias = "Usercontact";
    let cols ={
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
          },
          userid: {
            type: dataTypes.INTEGER
            
          },
          country: {
            type: dataTypes.STRING
          },
          city: {
            type: dataTypes.STRING
          },
          street: {
            type: dataTypes.STRING
          },
          number: {
            type: dataTypes.INTEGER
          },
          floor: {
            type: dataTypes.STRING
          },
          phonenumber: {
            type: dataTypes.INTEGER
          },
        

    }
    let config = {
        tableName: "userContact",
        timestamps: false
    }
    let Usercontact = sequelize.define(alias, cols,config)

    Usercontact.associate = function(models){
        Usercontact.hasMany(models.users, {
            as: "users",
            foreignKey:"id"

        });
        
        
    }

    return Usercontact;
}