const User = require('../Models/userSchema')
const fs = require('fs')
const path = require('path');


exports.PostLogin = (req, res) => {
}

exports.GetLogin = (req, res) => {
    res.render('login')
}

exports.GetCreate = (req, res) => {
    res.render('create', { currentPage: 'create' })
}

exports.PostCreate = async (req, res) => {
    const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        salary: req.body.salary,
        image: req.file.filename,
    });
     req.flash('success', 'Registration successful');

    res.redirect('home')
}

exports.PostEdit = async (req, res) => {
    try {
        const id = req.params.id;        
        let new_image = "";
        console.log(req.file)
        console.log(req.body)

        // if (req.file) {
        //     new_image = req.file.filename;

        //     const imagePath = path.join(__dirname, '../Public/uploads/', req.body.old_image);

        //     fs.unlinkSync(imagePath);
        // } else {
        //     new_image = req.body.old_image;
        // }
        const { username, email, age, salary, image, password } = req.body;

        // const updatedUser = await User.findByIdAndUpdate(id, {
        //     username,
        //     email,
        //     age,
        //     salary,
        //     image: new_image, 
        //     password
        // });

        // if (!updatedUser) {
        //     res.status(404).send("User not found");
        //     return;
        // }

        // req.session.message = {
        //     type: "success",
        //     message: "User Updated Successfully"
        // };
        // res.redirect('/home');
    } catch (error) {
        console.log("Error:", error);
        res.status(500).send("Internal Server Error");
    }
};
