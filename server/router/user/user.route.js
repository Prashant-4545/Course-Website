const router = require('express').Router();
const connection = require('../../connection/conn');


router.post('/signup', (req, res)=>{
    // Validation Will Be Added Later
    const {fullname, email, phone, gender, city, collegename, status, password} = req.body;
    if(req.body){
        connection.query(`insert into user values ?,?,?,?,?,?,?,?`
        ,[fullname, email, phone, gender, city, collegename, status, password],
        (err, result)=>{
            if(err){
                res.send({message: err})
            }
            else{
                res.send({message: 'Student Added', result: result[0]})
            }
        })
    }
    else{
        res.send({message: 'Something Went Wrong'})
    }

    
})

module.exports = router;