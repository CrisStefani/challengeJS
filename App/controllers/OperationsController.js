const fs = require('fs');
const path = require('path');
const db = require("../models");




const operationsController = {
    new: function(req, res){        
        return res.render('operationForm');
    },
    create: function(req, res){
        db.Operation.create({
            concepto: req.body.concept,
            monto: req.body.amount,
            fecha: req.body.date,
            transaccion: req.body.transaction
            })
        res.redirect('/');

    },

    ingreso: function(req, res){
         let suma = 0;
        db.Operation.findAll({
           
        }).then((resultado) =>{
           
            
              
                console.log(resultado);
              

              
            
                
        })
        return res.render('operationForm')
    }

}


module.exports = operationsController;