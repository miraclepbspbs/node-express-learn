const { writeFileSync, readFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `write sync someting ${first} , ${second}`,
  {
    flag: "a",
  }
);
console.log("done this task");
console.log("starting next task");
