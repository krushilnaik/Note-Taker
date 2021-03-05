const fs = require("fs");

async function getNotes() {
	return fs.readFileSync("./db.json").toString();
}


module.exports = { getNotes };
