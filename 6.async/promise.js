// promise

/*
    let promise = new Promise(function(resolve, reject) {
        // executor (the producing code, "singer")
    });
    resolve(value) — if the job is finished successfully, with result value.
    reject(error) — if an error has occurred, error is the error object.
*/


// let promise = new Promise((resolve, reject) => {
//     console.log('I am a producer');
//     resolve("sus");
// })
// console.log(promise)


// let promise1 = new Promise((res, rej) => {
//     console.log('I am a producer');
//     rej("some error");
// })
// console.log(promise1)

// function promise2(dataid, getNextdata) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("i am from  data id " + dataid);
//             res("sus");
//             if (getNextdata) {
//                 getNextdata();
//             }
//         }, 2000)
//     })
// }


// function promise3(dataid, getNextdata) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("i am from  data id " + dataid);
//             rej("error");
//             if (getNextdata) {
//                 getNextdata();
//             }
//         }, 2000)
//     })
// }


// const getpromise = (() => {
//     return new Promise((res, rej) => {
//         console.log("hello i am working");
//         res("seccuese")
//     })
// })

// let promise4 = getpromise();
// promise4.then((res) => {
//     console.log("i am working perfect", res);
// })
//     .catch((err) => {
//         console.log("there is an error ", err);
//     })

//     .finally(() => {
//         console.log("Promise ready")
//     })



// -------------------------------------------      Promises chaining    --------------------------------


// that is the same think i do with  callbacks hell but now  we use promises to avoid this problem

//with same function
// function getdata(dataid) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("I am from data id " + dataid);
//             resolve();
//         }, 2000);
//     });
// }

// getdata(1)
//     .then(() => {
//         console.log("Getting data2......");
//         return getdata(2);
//     })
//     .then(() => {
//         console.log("Getting data3......");
//         return getdata(3);
//     })
//     .then(() => {
//         console.log("Getting data4......");
//         return getdata(4);
//     });


// with 2 diffrent  functions

// function asyncFunc1() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('Async Function 1');
//             res('Data From Async Func  1')
//         }, 3000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('Async Function 2');
//             res('Data From Async Func  2')
//         }, 3000)
//     })
// }

// console.log("fetching data 1 ")
// asyncFunc1().then((res) => {
//     console.log("fetching data 2 ")
//     asyncFunc2().then((res) => { })
// })