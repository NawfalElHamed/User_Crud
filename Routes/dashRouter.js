const express = require("express")
const Router = express.Router()
const {GetHome} = require('./../Controllers/dashControllers')


Router.get('/home',GetHome);

module.exports = Router
