const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

const contents = fs.readFileSync(path.join(__dirname, "README.md"), "utf8");
const layout = fs.readFileSync(path.join(__dirname, "layout.html"), "utf8");

const parsed = marked(contents);
const output = layout.replace("%%CONTENTS%%", parsed);

fs.writeFileSync(path.join(__dirname, "public", "index.html"), output);
