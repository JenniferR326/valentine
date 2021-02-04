const router = require("express").Router();

module.exports = router;

router.use("/valantine", require("./valentine"));
router.use("/genre", require("./genre"));

router.use((req, res, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
});
