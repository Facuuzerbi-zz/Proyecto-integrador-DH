const fs = require('fs');
const data = require('../data/products.json');
const db = require('../database/models');
const Product = db.Product;
const Producttype = db.Producttype;
const path = require("path")
const {v4 : uuidv4} = require('uuid')
const sequelize = require('sequelize');

module.exports = {
    autos: function (req, res) {
        let productosAMostrar = Product.findAll({ where: { category: "auto" } })

           .then(function (productosAMostrar) {
                console.log(productosAMostrar)
               res.render('../views/products/products.ejs', { productosAMostrar });
            })
        //let productosAMostrar = data.filter(x => x.category == "auto");
        //res.render('../views/products/products.ejs', { productosAMostrar });
    },

    motos: function (req, res) {
        let productosAMostrar = data.filter(x => x.category == "moto");
        res.render('../views/products/products.ejs', { productosAMostrar });
    },
    monopatines: function (req, res) {
        let productosAMostrar = data.filter(x => x.category == "monopatin");
        res.render('../views/products/products.ejs', { productosAMostrar });
    },
    detail: function (req, res) {
        let id = req.params.id;
        let productsDetail = data.filter(x => x.id == id);

        res.render('../views/products/productsDetail.ejs', { productsDetail });
    },
    //FORMULARIO DE PRODUCTO

    //preparado para json, no andaba
    edits: function (req, res) {
        let productoAEditar = data.find(product => product.id == req.params.id);
        res.render('../views/products/edit.ejs', { productoAEditar });
        let newArray = {
            id: '3',
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            potency: req.body.potency,
            autonomy: req.body.autonomy,
            security: req.body.security,
            ch1Desc: req.body.ch1Desc,
            ch1img: req.body.ch1img,
            ch2Desc: req.body.ch2Desc,
            ch2img: req.body.ch2img,
            ch3Desc: req.body.ch3Desc,
            ch3img: req.body.ch3img,
        }
        let esto = JSON.stringify(newArray);
        fs.writeFileSync("products.json", esto);
        res.redirect('/');
    },


    //Levanta info y guarda en sql
    edit: function(req, res){
        console.log("entro a edit")
        //busca el id en la bd y levanta la info para mostrarla en la view
        let productoAEditar = Product.findAll({ where: {id: req.params.id} })
        Promise.all([productoAEditar])
        .then(function ([product]) {
             //console.log(product)
            res.render('../views/products/edit', {product:product});
         });

        },

        saveEdit: (req, res) => {
         //guarda en la bd los datos editados
         console.log("ingresa a saveEdit")
         let productoGuardar =  Product.update({ 
            name:req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            potency: req.body.potency,
            autonomy: req.body.autonomy,
            security: req.body.security,
            performancedesc: req.body.performancedesc,
            exteriordesc: req.body.exteriordesc,
            confortdesc: req.body.confortdesc,
            },
            {where:{id: req.params.id}} )
        .then(function(productoGuardar){
        return res.redirect('../edit/' + req.params.id);     

        })
        },

    create: (req, res) => {
        //peticion db. a los tipos de productos de la bd
        Producttype.findAll().then(function (types) {
            return res.render('../views/products/create.ejs', { types });
        })

    },
    //Guarda en bd sql
    store: function (req, res) {
        const create = Product.create({
            name: req.body.name,
            description: req.body.description,
            productstypeid: req.body.category,
            category: "auto",
            price: req.body.price,
            potency: req.body.potency,
            autonomy: req.body.autonomy,
            security: req.body.security,
            performancedesc: req.body.performancedesc,
            exteriordesc: req.body.exteriordesc,
            confortdesc: req.body.confortdesc,
            active: 1,
            type: req.file.mimetype,
            image: req.file.originalname,
            data: fs.readFileSync(
                __basedir + '/resources/static/assets/uploads/' + req.file.filename),
            }).then((product) => {
                fs.writeFileSync(
                    __basedir + '/resources/static/assets/tmp/' + product.name,
                    product.data
                );
                return res.sendFile(path.join(`${__dirname}../views/products/products.ejs`));
                //return res.send(`File has been uploaded.`);
                console.log("Holas    " + createImage)
            });

         //armado para guardar en la tablas de imagenes, no la usamos para poder usar la de productos en la demo   
        /*const createImage = Image.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(
                __basedir + '/resources/static/assets/uploads/' + req.file.filename
            ),
        }).then((image) => {
            fs.writeFileSync(
                __basedir + '/resources/static/assets/tmp/' + image.name,
                image.data
            );
            return res.sendFile(path.join(`${__dirname}../views/products/products.ejs`));
            //return res.send(`File has been uploaded.`);
            console.log("Holas    " + createImage)
        });*/

        const result = Producttype.findAll({
            attributes: [
                "category"
            ],
            where: { id: req.body.category }
        })

            .then(function (result) {
                //console.log(result)
                return res.redirect('/products/' + result[0].category);
            })

    },
    //armado para guardar en json, se tiene q cambiar stores por store e inhabilitar el que usa sql
    stores: function (req, res) {

        Producttype.findAll().then(function (types) {
            return { types };
        });

        let autosexistentes = fs.readFileSync('data/products.json', 'utf-8')
        let autos = JSON.parse(autosexistentes)

  
        
        let nuevoauto =  {
            id: uuidv4(),
            name: req.body.name,
            description: req.body.description,
            category: "auto",
            price: req.body.price,
            image: "MODEL-S.jpg",
            potency: req.body.potency,
            autonomy: req.body.autonomy,
            security: req.body.security,
            performancedesc: req.body.performancedesc,
            exteriordesc: req.body.exteriordesc,
            confortdesc: req.body.confortdesc,
        };
        autos.push(nuevoauto);


        let car = JSON.stringify(autos);
        fs.writeFileSync('data/products.json',car, 'utf-8');

        let tipoproducto
        if (nuevoauto.category== "auto"){
            tipoproducto = "auto"

        if (nuevoauto.category=="moto"){
            tipoproducto = "moto"
        }if (nuevoauto.category=="monopatin"){
            tipoproducto = "monopatin"
        }else{
            console.log ("se ingreso dato no existente")
        }
        
        }
        
        return res.redirect('/products/' +  tipoproducto );



},


}