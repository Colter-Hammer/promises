/**
 * introduces promise.catch(), promise.resolve(), and promise.reject()
 */

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`RESOLVE: This worked`));
    setTimeout(() => reject(`REJECT: This also worked`));
});

promise
    .then(console.log)
    .catch(console.error);

let resolved = Promise.resolve('SUCCESS');
let rejected = Promise.reject('FAILURE');

resolved.then(console.log);
rejecte.catch(console.log);