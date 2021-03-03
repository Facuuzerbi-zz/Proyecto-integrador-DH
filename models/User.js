// 1. Guardar a nuestro usuario en la DB
// 2. Buscar al usuario que se quiere logear por su email
// 3. Buscar a un usuario por su ID
// 4. Editar la información de un usuario
// 5. Eliminar a un usuario de la DB

const fs = require("fs");

const User = {
    fileName: './data/users.json',

    getData: function (){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function (){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        return lastUser.id + 1
    },

    findAll: function (){
        return this.getData();
    },

    findByPk: function (id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function (field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] == text);
        return userFound;
    },

    create: function (userData){
        let allUsers = this.findAll();
        allUsers.push(userData);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return true;
    }
}

console.log(User.generateId());