/**
 * The purpose of this is to prove that promises are always asyncronous
 */

let myPromise = new Promise((resolve, reject) => {
    resolve('PROMISE VALUE');
});

myPromise.then(console.log)
console.log('MAIN PROGRAM');