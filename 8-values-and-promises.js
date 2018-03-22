/**
 * 
 * Create a promise chain that returns values to prove that promise handlers will wrap the returned value in a promise to facilitate further chaining
 * 
 */

function attachTitle(arg) {
    return `DR. ${arg}`;
};

let myPromise = new Promise((resolve, reject) => {
    resolve(`MANHATTAN`);
    reject(`NOPE`);
})
.then(attachTitle)
.then(console.log)
.catch(console.log);