

function all(promise1, promise2) {
    return new Promise((resolve, reject) => {
        let counter = 0;
        let output = [];
        try {
            promise1()
                .then((value) => {
                    output[0] = value;
                    // console.log('OUTPUT: ', output)
                    // console.log('VALUES: ', value);
                    counter++;
                    if (counter >= 2) resolve(output);
                })
                .catch(reject)
            promise2()
                .then((value) => {
                    output[1] = value;
                    // console.log('OUTPUT: ', output)
                    // console.log('VALUES: ', value);
                    counter++;
                    if (counter >= 2) resolve(output);
                })
                .catch(reject);


        } catch (e) {
            reject(e);
        }
    })
}

function onReject(error) {
    console.log(error);
}

all(getPromise1, getPromise2)
    .then(values => {
        console.log(values)
    })
    .catch(onReject);