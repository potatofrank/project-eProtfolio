const bcrypt = require("bcryptjs");
const bcrypt_cpy = require("bcrypt");
const passport = require("passport");
const mongoose = require("mongoose");

/* Load link model */
const Link = require("../models/links");

// POST request to handle login
exports.link_post = function (req, res, next) {

    let { name, link } = req.body;
    let errors = [];

    if (!name || !link ) {
        req.flash('uploadError', 'Please enter all fields');
        errors.push({ msg: 'Please enter all fields' });
    }

    if(!link.includes("soundcloud.com")){
        req.flash('uploadError', 'Please include a proper link');
        errors.push({ msg: 'Please include a proper link' });
    }

    if (errors.length > 0) {
        Link.find()
            .lean()
            .then(function (doc) {
                res.render('uploadLink', {links: doc,
                    user:req.user,
                    errorMessage: req.flash("uploadError"),
                    errors,
                    name,
                    link,});
            });
    } else {
        Link.findOne({ link: link }).then((links) => {
            if (links) {
                req.flash('uploadError', 'Link already exists');
                Link.find()
                    .lean()
                    .then(function (doc) {
                        res.render('uploadLink', {links: doc,
                                                  user:req.user,
                                                  errorMessage: req.flash("uploadError"),
                                                  errors,
                                                  name,
                                                  link,});
                    });
            } else {
                let n = 0;
                let n_1 = 0;
                n = link.indexOf("src=\"");
                n_1 = link.indexOf("/iframe>");
                link = link.slice(n+5, n_1-3);
                const newLink = new Link({
                    name,
                    link,
                });
                newLink
                    .save()
                    .then((links) => {
                        req.flash('uploadSuccess', 'You uploaded a link');
                        Link.find()
                            .lean()
                            .then(function (doc) {
                                res.render('uploadLink', {links: doc,
                                                          user:req.user,
                                                          successMessage: req.flash("uploadSuccess")});
                            });
                    })
                    .catch((err) => console.log(err));
            }
        });
    }
};

exports.link_get = function (req, res, next) {
    Link.find()
        .lean()
        .then(function (doc) {
            res.render('uploadLink', {links: doc, user:req.user});
        });
};

exports.delete_link = function (req, res, next) {
    const id = req.params.id;
    Link.findByIdAndDelete(id).exec();
    res.redirect('/link/uploadLink');
};


