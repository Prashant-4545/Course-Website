const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const port = process.env.PORT || 3101
const cors = require('cors')
app.use(cors());



const userRouter = require('./router/user')




app.use('/api/user', userRouter);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})