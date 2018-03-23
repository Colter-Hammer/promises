/**
 * 
 * make a function `parsePromised` that creates a promise
 * JSON.parse the return value
 * try/catch any errors
 * 
 */

//  Rejecting my answer, and the "correct" answer. Something with the code?

var files = process.argv[2];

function parsePromised(file) {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(file));
    } catch (e) {
      reject(e);
    }
  });
}

function onReject(error) {
  console.log(error.message);
}

parsePromised(files)
  .then(null, onReject);

// 'use strict';

// function parsePromised(json) {
//   return new Promise(function (fulfill, reject) {
//     try {
//       fulfill(JSON.parse(json));
//     } catch (e) {
//       reject(e);
//     }
//   });
// }

// function onReject(error) {
//   console.log(error.message);
// }

// parsePromised(process.argv[2])
// .then(null, onReject);
