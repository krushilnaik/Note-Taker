const fs = require("fs");
const path = require("path");

async function getNotes() {
	return JSON.parse(fs.readFileSync(path.join(__dirname, "db.json")).toString());
}


module.exports = { getNotes };
