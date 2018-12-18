const router = require("express").Router();
const dbController = require("../../controllers/dbController");

router.route("/")
	.get(dbController.findAll)
	.post(dbController.create);

router
	.route("/:id")
	.get(dbController.findById)
	.put(dbController.update)
	.delete(dbController.remove);

module.exports = router;
