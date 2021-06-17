const fs = require('fs');
const path = require('path');

const db = require("../models");


const indexController = {
    home: function(req, res){
        db.Operation.findAll({
          order: [['id', 'DESC']],
          limit: 10           
        })
            .then(function(list){                
                res.render('index', {list:list})
            })
        }
        


}

module.exports = indexController;