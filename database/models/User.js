const bcryptjs = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstname: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,

            set(value) {
              const hash = bcryptjs.hashSync(value, 10);
              this.setDataValue('password', hash);
            },
        },

        email: DataTypes.STRING
        
    }, 
    {
        timestamps: false
    },
    {
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcryptjs.hash(password, bcryptjs.genSaltSync(8));
            },
            //validPassword(password) {
              //  return bcryptjs.compare(password, this.password);
           // }
        }
    });

    return User;
}