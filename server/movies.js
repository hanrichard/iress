const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/api/movies", (req, res) => {
	fs.readFile("./db.json", (err, json) => {
		let obj = JSON.parse(json);
		res.setHeader("Content-type", "application/json");

		res.status(200).json({
			movies: obj,
		});
	});
});

module.exports = router;
