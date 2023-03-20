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
});

router.post('/login',(req, res)=>{
    const {email, password} = req.body;
    if(req.body){
        connection.query(`select * from user where email = ? and password = ?`,
            [email, password], (err, result) => {
                if (err) {
                    res.send(err);
                }
                if (result) {
                    try{
                        jwt.sign({result}, jwt_key,{expiresIn: "2d"},(err, token)=>{
                            if(err){
                                res.send("User Not Found");
                            }
                            res.send({message: 'Login Successful',result: result[0], auth: token});
                            console.log(result)

                        })
                        
                        // res.redirect('/school-dashboard');
                        console.log("You are Logged in")
                    }
                    catch(err){
                        res.send({message: "Invalid Credentials"});
                    }

                }
                else {
                    res.send("Invalid Username or Password")
                }
            })
    }
})

module.exports = router;