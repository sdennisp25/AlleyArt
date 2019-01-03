const router = require("express").Router();

//////////AUTH w/ LOCAL Strategy////////
router.post('/login',
passport.authenticate('local', {
	successRedirect: '/landing',
	failureRedirect: '/',
	failureFlash: true
})
);

////////////log user out and close cookie/session////////////
router.get('/logout', function (req, res) {
req.logout();
res.redirect('/');
});

module.exports = router;