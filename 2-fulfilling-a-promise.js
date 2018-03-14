/**
 * create a promise
 * setTimeout to 300, print 'FULFILLED!'
 * pas console.log to then after it has been fulfilled.
 * 
 */

let promise = new Promise((fulfilled, rejected) => {
    setTimeout(fulfilled('FULFILLED!'), 300);
}).then(fulfilled => console.log(fulfilled));