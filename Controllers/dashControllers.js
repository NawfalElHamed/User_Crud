const User = require('../Models/userSchema')

exports.GetHome = async (req, res) => {
    const successMessage = req.flash('success');
    
    try {
        const users = await User.find().exec();
        res.render('home', { successMessage, users ,currentPage: 'home' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};