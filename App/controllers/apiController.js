
const db = require("../models");



const apiController = {
    list: async (req, res) => {
        
        try {
            const operations = await db.Operation.findAll();
            const apiResult = {
                meta: {
                    status:200,
                    total: operations.length,
                },
                data: operations
            }
            res.json(apiResult)
        }catch (err) {
            return res.json({ 
                meta: {
                    status:500,
                    message:'Error al procesar la API'
                },
                date:[]
            })
        }
        
        },
     detail: async (req, res) => {
        const detailResult = await db.Operation.findByPk(req.params.id)
        if(!detailResult){
            return res.json({ 
                meta:404,
                message: 'No existe operación'
            })
        }
        res.json(detailResult)
     }   
    }





module.exports = apiController;