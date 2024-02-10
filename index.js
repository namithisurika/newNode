//const os = require('os');
//const path = require('path');
//import os from "node:os";
import { dirname, join } from "node:path";
import { readFile } from "node:fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

readFile(join(__dirname, "myname.txt"), (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
