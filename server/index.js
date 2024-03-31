const express =  require('express')
require('dotenv').config();
const PORT =  4000;
const app = express();
const mongoose = require('./config/mongoose')
const cors = require('cors')

app.use(cors());
app.use(express.json());

// Add CORS headers middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    next();
});

app.use(require('./routes/bookmarkRoutes'))


app.listen(PORT,(err)=>{
    if(err){
        console.log(`Error in listening port ${PORT} ${err}`)
    }
    else{
        console.log(`Sever is started at ${PORT}`)
    }
})
