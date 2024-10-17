const {writeFile, readFile} = require('fs');

readFile('./content/random1.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/random2.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/random3.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        });
    });
}
);