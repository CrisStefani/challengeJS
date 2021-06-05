const fs = require('fs');
const path = require('path');





const operationsController = {
    new: function(req, res){        
        return res.render('operationForm');
    }

}


module.exports = operationsController;