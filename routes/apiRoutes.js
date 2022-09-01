const router = require('express').Router();
const fs = require('fs');

router.get("/notes", (req, res) => {
	fs.readFile("db/db.json", "utf-8", (err, data) => {
		return err ? console.log(err) : res.json(JSON.parse(data));
	});
});

router.post("/notes", (req, res) => {
	fs.readFile("db/db.json", (err, data) => {
		if (err) throw err;
		let json = JSON.parse(data);
		let newNote = {
			// id: uuid(),
			title: req.body.title,
			text: req.body.text,
		};
		json.push(newNote);
		fs.writeFile("db/db.json", JSON.stringify(json), function (err) {
			if (err) throw err;
			res.redirect("/notes");
		});
	});
});

module.exports = router;