const express = require("express");
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const lc_routes = require('./routes/lc-routes');
const gfg_routes = require('./routes/gfg-routes');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const server = http.createServer(app);

mongoose.set("strictQuery",true);
mongoose.connect(process.env.DATABASE_URL);

var db = mongoose.connection;
db.on("open",()=>console.log("connected to db"))
db.on("error",()=>console.log("error occured"))

app.use(express.json());
app.use(cors());
app.use('/lc',lc_routes);
app.use('/gfg',gfg_routes);

const PORT = process.env.PORT || 4000;

server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})