/**
 * 
 * 
 * 
 */

const HTTP = require('q-io/http');

HTTP.read('http://localhost:1337')
    .then(data => {
        let parsed = JSON.parse(data);
        console.log(parsed);
    })
    .catch(console.log);