const router = require('express').Router();
const connection = require('../../connection/conn');
const jwt = require('jsonwebtoken')

router.post('/login', (req,res)=>{
    const {regdNumber, password} = req.body;
    if(regdNumber && password){
        connection.query(`select * from admin where regdNumber = ? and passsword = ?`,
        [regdNumber, password]
        ,(err, result)=>{
            if(err){
                res.send({message: err})
            }
            else{
                res.send({message: 'Logged In', result: result[0]})
            }

        })
    }
})

module.exports = router;