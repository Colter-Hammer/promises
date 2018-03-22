/**
 * introduces promise.catch(), promise.resolve(), and promise.reject()
 */

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`RESOLVE: This worked`), 200);
    setTimeout(() => reject(`REJECT: This also worked`), 300);
});

promise
    .then(console.log)
    .catch(console.error);

let resolved = Promise.resolve('SUCCESS');
let rejected = Promise.reject('FAILURE');

resolved.then(console.log);
rejected.catch(console.log);

resolved.then(console.log);
rejected.catch(console.log);