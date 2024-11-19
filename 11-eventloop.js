const {readFile} = require('fs');

console.log("Fisrt task started");

readFile("first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log("First task ho gaya");

});

console.log("New task detected");