// import items needed
const router = require('express').Router();
const fs = require("fs");

const store = require('../db/store')

// make a GET request with all notes from the database

router.get('/notes', (req, res) => {
	store
		.getNotes()
		.then((notes) => {
			return res.json(notes);
		})
		.catch((err) => res.status(500).json(err));
})

// create a post request

router.post("/notes", (req, res) => {
	store
		.getNotes()
		.then(notes => {
		/**
		 * @type {object[]}
		 */
		let noteList = notes;

		let note = req.body;
		note.id = noteList.length;

		noteList.push(note);

		console.log(`noteList is now:`, noteList);

		fs.writeFile("./db/db.json", JSON.stringify(noteList, null, "\t"), err => res.json(err));
	}).catch((err) => res.status(500).json(err));
});

// create a delete request

router.delete("/notes/:id", (req, res) => {
	store.getNotes().then(notes => {
		/**
		 * @type {object[]}
		 */
		let noteList = notes;

		const removed = noteList.splice(Number(req.params.id), 1);

		fs.writeFile("./db/db.json", JSON.stringify(noteList, null, "\t") + "\n", err => res.json(err));

		console.log(`Removed ${removed} from database.`);
	});
});

module.exports = router;
