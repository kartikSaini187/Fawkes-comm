const express = require('express');
const userroutes = require('./routes/userroute');
const baseMongo = require('./models/baseMongo');
const app = express();
baseMongo.connect("mongodb://127.0.0.1:27017","ecomm")
app.use(express.json());
app.use('/user', userroutes);

app.listen(8000, "127.0.0.1", () => {
    console.log("Server is running on http://127.0.0.1:8000/");
});