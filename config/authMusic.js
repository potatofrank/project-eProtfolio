module.exports = {
    ensureMusicAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('loginError', 'You must login to view this page');
        res.render('musicLogin', { errorMessage: req.flash("loginError")});
    }
}