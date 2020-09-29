module.exports = {
    ensureMessageAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('loginError', 'You must login to view this page');
        res.render('messageLogin', { errorMessage: req.flash("loginError")});
    }
}