const bcrypt = require("bcryptjs");
const bcrypt_cpy = require("bcrypt");
const passport = require("passport");
const mongoose = require("mongoose");

/* Load user model */
const User = require("../models/user");

// GET request to display home page
exports.index = function (req, res) {
    res.redirect('/home');
};

// POST request to handle login
exports.login_post = function (req, res, next) {
    passport.authenticate("local", {
        successRedirect: "/userpage",
        failureRedirect: "/users/login",
        failureFlash: true,
        successFlash: true,
    })(req, res, next);
};

// GET request to display login page
exports.login_get = function (req, res, next) {
    res.render("login", { message: req.flash('error') });
};

exports.register_post = function (req, res, next) {
    const { first_name, family_name, email, password, password2 } = req.body;
    let errors = [];

    if (!first_name || !family_name || !email || !password || !password2) {
        req.flash('registerError', 'Please enter all fields');
        errors.push({ msg: 'Please enter all fields' });
    }

    if (password !== password2) {
        req.flash('registerError', 'Passwords do not match');
        errors.push({ msg: 'Passwords do not match' });
    }

    if (password.length < 6) {
        req.flash('registerError', 'Password must be at least 6 characters');
        errors.push({ msg: 'Password must be at least 6 characters' });
    }

    if (errors.length > 0) {
        res.render("register", {
            errorMessage: req.flash("registerError"),
            errors,
            first_name,
            family_name,
            email,
            password,
            password2,
        });
    } else {
        User.findOne({ email: email }).then((user) => {
            if (user) {
                req.flash('registerError', 'Email already exists');
                res.render("register", {
                    errorMessage: req.flash("registerError"),
                    errors,
                    first_name,
                    family_name,
                    email,
                    password,
                    password2,
                });
            } else {
                const newUser = new User({
                    first_name,
                    family_name,
                    email,
                    password,
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then((user) => {
                                req.flash('registerSuccess', 'You are now registered and can log in');
                                res.render("login", { successMessage: req.flash("registerSuccess") });
                            })
                            .catch((err) => console.log(err));
                    });
                });
            }
        });
    }
};
