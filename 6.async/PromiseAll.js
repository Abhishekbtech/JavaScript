
/*

Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of the given
    promises rejects, it becomes the error of Promise.all, and all other results are ignored.
Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as
    an array of objects with:
status: "fulfilled" or "rejected"
value (if fulfilled) or reason (if rejected).
Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.
Promise.any(promises) (recently added method) – waits for the first promise to fulfill, and its result becomes the outcome.
     If all of the given promises are rejected, AggregateError becomes the error of Promise.any.
Promise.resolve(value) – makes a resolved promise with the given value.
Promise.reject(error) – makes a rejected promise with the given error.

*/





// let payerPromise = new Promise((res, rej) => {
//     res(100);
// });

// let shopKeeperPromise = new Promise((res, rej) => {
//     res(10000 + 100);
// });

// Promise.all([payerPromise, shopKeeperPromise])
//     .then((data) => {
//         console.log(data, "RBI will take a ledger");
//     })
//     .catch((error) => {
//         console.log(error, "RBI SHOULD ROLLBACK THE MONEY TO PAYER");
//     });


// //  or


// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then((data) => console.log(data));



// Promise.allSettled
/*
    Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:

    {status:"fulfilled", value:result} for successful responses,
    {status:"rejected", reason:error} for errors.
*/

// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://no-such-url'
// ];

// Promise.allSettled(urls.map(url => fetch(url)))
//     .then(results => {
//         results.forEach((result, num) => {
//             if (result.status == "fulfilled") {
//                 console.log(`${urls[num]}: ${result.value.status}`);
//             }
//             if (result.status == "rejected") {
//                 console.log(`${urls[num]}: ${result.reason}`);
//             }
//         });
//     });


//  Promise.race

/*
    Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).
*/

// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then((data) => console.log(data));



// Promise.any

/*
Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. If all of the given
promises are rejected, then the returned promise is rejected with AggregateError – a special error object that stores
all promise errors in its errors property.
*/

// Promise.any([
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 2000))
// ]).then((data) => console.log(data));