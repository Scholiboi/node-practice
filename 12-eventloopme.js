console.log("1")
setTimeout(() => { // setTimeout is a function that takes two arguments, a callback function and a time in milliseconds. It is used to simulate a delay in the execution of the callback function.
    console.log("2")
}, 0)
// Why does it execute last? Because the setTimeout function is a part of the Web APIs provided by the browser. The callback function is sent to the Web APIs and is executed after
console.log("3")
console.log("4")
console.log("5")