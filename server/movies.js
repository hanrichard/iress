const express = require("express");
const router = express.Router();
const movies = require("./db.json");

router.get("/api/movies", (req, res) => {
	res.setHeader("Content-type", "application/json");
	res.status(200).json({
		movies: movies,
	});
});

module.exports = router;
