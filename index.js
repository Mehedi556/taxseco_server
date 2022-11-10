const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000 ;

//middleware----------
app.use(cors());
app.use(express.json());
//middleware----------




app.get('/' , (req , res) => {
    res.send('This is Taxseco Server Data')
})















app.listen(port , () => {
    console.log(`Node server is running on port: ${port}`)
})