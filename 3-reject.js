/** 3-Reject a promise
 * Create a promise that is going to be rejected.
 * Make a function to handle the error that is called.
 */

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('REJECTED!')), 300);
});

myPromise.then(null, (reject) => {
    onReject(reject);
})


function onReject(error) {
    console.log(error.message);
}
