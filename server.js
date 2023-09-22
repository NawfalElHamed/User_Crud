require('dotenv').config();

const express = require('express')
const app = express()
const session = require('express-session')
const flash = require('express-flash')
const PORT = process.env.PORT
const path = require('path')
const User = require('./Models/userSchema')
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const userRouter = require("./Routes/userRouter")
const dashRouter = require("./Routes/dashRouter")
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const exp = require('constants');
const secret = process.env.secret

app.use(
    session({
        secret: secret,
        resave: false,
        saveUninitialized: true,
    })
);

app.use((req, res, next) => {
    res.locals.message = req.session.message
    delete req.session.message
    next()
})
app.use(flash());

app.use(methodOverride("_method"))
app.set('views', path.join(__dirname, './Views'));
app.use(express.static(path.join(__dirname, 'public'),{maxAge:365000}));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', userRouter)
app.use('/', dashRouter)

app.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id).exec();
        if (!user) {
            res.redirect('/');
        } else {
            res.render('edit', { user: user ,currentPage: 'edit'});
        }
    } catch (err) {
        console.error(err);
        res.redirect('/');
    }
});


app.listen(PORT, async (req, res) => {
    await connectDB().then(() => {
        console.log(`server connect to PORT ${PORT}`);
    })
})



