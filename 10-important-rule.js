// 1. Create alwaysThrows function that always throws an error "OH NOES"

function alwaysThrows() {
    return new Promise((resolve, reject) => {
        reject(`OH NOES`);
    }
    )};

// 2. Create iterate function that prints the first argument given, and returns that arg + 1

function iterate(int) {
    return new Promise((resolve, reject) => {
       console.log(int);
        resolve(int + 1);
    })
};

// 3. Promise chain using Promise.resolve that has the iterate method, then a series of iterations that attempts to perform `iterate` 10 times

    iterate(1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(console.log);

// 4. Rejection handler at the bottom of the cain to print the error.message using console.log

// 5. call `alwaysThrows` after the 5th call of `iterate`