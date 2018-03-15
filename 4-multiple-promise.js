/**
 * Callbacks should only be called once, and the same is true of error handling in promises.
 * The promise resolution will only be called once.
 */

let myPromise = new Promise((resolve, reject) => {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

myPromise.then(success => {
    console.log(success);
}, reject => {
    onRejected(reject);
});

function onRejected(error) {
    console.log(error.message);
};