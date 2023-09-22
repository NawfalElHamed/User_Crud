const express = require("express")
const Router = express.Router()
const {PostCreate,GetCreate,GetLogin,PostLogin,PostEdit} = require('../Controllers/userControllers')
const upload = require("./../Middlewares/multer")


Router.get('/login',GetLogin);

Router.post('/login',PostLogin)

Router.get('/create',GetCreate);

Router.post('/create',upload.single('image'),PostCreate)

Router.post('/edituser/:id',upload.single('image'),PostEdit)

module.exports = Router
