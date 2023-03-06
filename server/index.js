const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const port = process.env.PORT || 3101


app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})