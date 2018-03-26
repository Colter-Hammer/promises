// 1. Use q-oi/http to send GET request to port 7000 
//  a. will return a string that represents a user ID
// 2. Send a GET request to port 7001/${user-id}
// 3. console.log the resulting object

let QHTTP = require('q-io/http');


let options = {
    url: 'http://localhost:7000',
    method: 'GET',
}

let user_id;
QHTTP.request(options)
    .then(data => {
        data.body.read(second)
            .then(data => {
                second(data.toString());
            })
            .catch(onRejected)
    })
    .then(console.log)

    .catch(onRejected);

function second(id) {
    return new Promise((resolve, reject) => {
        let options = {
            url: 'http://localhost:7001',
            method: 'GET',
            pathInfo: id
        }
        QHTTP.request(options)
            .then(console.log(options))
            .then(data => {
                resolve(data);
            })
            .catch(reject(onRejected));
    })
}

function onRejected(e) {
    console.log(e.message)
}



