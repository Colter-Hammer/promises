/**
 * 
 * make a function `parsePromised` that creates a promise
 * JSON.parse the return value
 * try/catch any errors
 * 
 */

//  Rejecting my answer, and the "correct" answer. Something with the code?

//  let file = process.arg[2];

// function parsePromised(file) {
//     return new Promise((resolve, reject) => {
//         try{
//             JSON.parse(file);
//             resolve(`You rock!`);
//         } catch(e) {
//             reject(`You suck!`);
//         };

//     });
// }

// parsePromised(file)
// .then(console.log)
// .catch(console.log);

'use strict';

function parsePromised(json) {
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
}

function onReject(error) {
  console.log(error.message);
}

parsePromised(process.argv[2])
.then(null, onReject);
