/**
 * 
 * first and second provided as global functions
 *  Call the first function 
 *      it will return a fulfilled secret value
 *  Call the second with the secret value from first
 * 
 */


let firstPromise = first();

let firstFulfilled = firstPromise.then(second)

let secondFulfilled = firstFulfilled.then(console.log);


// also works
first().then(second).then(console.log);