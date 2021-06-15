const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const db = require("../models");




const usersController = {
    login: function(req, res){        
        return res.render('login');
    },

    register: function(req, res){
       
        return res.render('register');
    },
    create: function(req, res){
       
     db.User.create({
            usuario: req.body.usuario,
            nombre: req.body.nombre,
            password: bcrypt.hashSync(req.body.password, 10),
            email: req.body.email
            })
        res.redirect('/');
    }, 
    logon: function (req, res){
        let errors = validationResult(req);
        if (errors.isEmpty()){
            db.User.findOne({ where: { email: req.body.email } })
            .then((resultado) =>{
            if (bcrypt.compareSync(req.body.password, resultado.password)) {
                /*
              //  delete resultado.password;
                req.session.user = resultado;
               // console.log(req.session.user);
                if(req.session.user.email == "admin@af.com"){
                    req.session.admin  = req.session.user.email;
                    console.log(req.session.admin);
                }
            /* if (req.body.remember) {
                 res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2});
            }*/
            return res.redirect('/');
        }
        })
        .catch(function (errors){

        });             
        
    }else {
        
        return res.render('login', {errors: errors.array()});
    }
    }

}


module.exports = usersController;