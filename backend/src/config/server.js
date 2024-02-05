const express = require("express");
const usersRoutes=  require('../routes/user.routes.js')
const sendcompanyRoutes = require( '../routes/send.compay.routes')
const companyRoutes = require("../routes/company.routes")
const rolRoutes= require("../routes/rol.routes")
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3200;



app.use(express.json());
app.use(usersRoutes, sendcompanyRoutes, companyRoutes, rolRoutes)

app.set("port", process.env.PORT || port);

module.exports = app;
