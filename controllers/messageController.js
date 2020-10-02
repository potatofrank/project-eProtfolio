
/* Load link model */
const Message = require("../models/message");
let msg_length = 0;
// POST request to handle messages
exports.message_post = function (req, res, next) {
    const { first_name, family_name, email, phoneNumber, message } = req.body;
    const date = new Date();
    let errors = [];

    if (!first_name || !family_name || !email || !phoneNumber || !message ) {
        req.flash('messageError', 'Please enter all fields');
        errors.push({ msg: 'Please enter all fields' });
    }

    if (errors.length > 0) {
        res.render("messages", {
            errorMessage: req.flash("messageError"),
            errors,
            first_name,
            family_name,
            email,
            phoneNumber,
            message,
        });
    } else {
        const newMessage = new Message({
            first_name,
            family_name,
            email,
            phoneNumber,
            message,
            date,
        });
        newMessage
            .save()
            .then((message) => {
                req.flash('messageSuccess', 'You have successfully sent me a message');
                res.render("messages", { successMessage: req.flash("messageSuccess") });
            })
            .catch((err) => console.log(err));
    }
};

exports.message_get = function (req, res, next) {

    Message.find()
        .lean()
        .then(function (doc) {
            msg_length = doc.length;
            res.render('mymessages', {msg: msg_length, messages: doc, user:req.user});
        });
}

exports.delete_message = function (req, res, next) {
    const id = req.params.id;
    Message.findByIdAndDelete(id).exec();
    res.redirect('/users/mymessages');
};