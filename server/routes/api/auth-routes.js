const router = require("express").Router();
const passport = require('passport');


//////////AUTH w/ LOCAL Strategy////////
router
	.post('/login',
		passport.authenticate('local'), function(req, res) {
			if (res.statusCode===200) {
				console.log('LOGIN STATUS CODE: ', res.statusCode);
				res.send(req.user).status(200);
			}
			else{
				console.log('LOGIN STATUS CODE: ', res.statusCode);
				res.send().status(req.statusCode);
			}
			}
	);

////////////log user out and close cookie/session////////////
router
.get('/logout', function (req, res) {
	console.log("USER LOGGED OUT");
	req.logout();
	res.redirect('/');
});

module.exports = router;