const fs = require('fs');
const path = require('path');





const usersController = {
    login: function(req, res){        
        return res.render('login');
    },

    register: function(req, res){
       
        return res.render('register');
    }

}


module.exports = usersController;