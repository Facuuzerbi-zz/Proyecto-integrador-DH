const data = require('../data/products.json');

module.exports = {
    autos: function (req,res){
        let productosAMostrar = data.filter(x => x.category == "auto");
        res.render('../views/products/products.ejs', {productosAMostrar});
    },
    motos: function (req,res){
        let productosAMostrar = data.filter(x => x.category == "moto");
        res.render('../views/products/products.ejs', {productosAMostrar});
    },
    monopatines: function (req,res){
        let productosAMostrar = data.filter(x => x.category == "monopatin");
        res.render('../views/products/products.ejs', {productosAMostrar});
    },
    detail: function (req,res){
        let id = req.params.id;
        let productsDetail = data.filter(x => x.id == id);
        res.render('../views/products/productsDetail.ejs', {productsDetail});
    },
    //FORMULARIO DE PRODUCTO
    create: function (req,res){
        res.render('../views/products/create.ejs');
    }, 
    store: function (req,res){
        req.body;
    }, 
    edit: function (req,res){
        let productoAEditar = data.find(product => product.id == req.params.id);
        let newArray = data.map(product =>{
            if(product.id == productoAEditar.id){
                product.name = req.params.name;
                product.description = req.params.description;
                product.price = req.params.price;

            }
        })
    }
}