/*
    Async/await
    There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”.
    It’s surprisingly easy to understand and use.
*/

// async function f() {
//     console.log("hello")
// }


// async function f() {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), 1000)
//     });

//     let result = await promise; // wait until the promise resolves (*)

//     console.log(result); // "done!"
// }


// function api() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('i am working')
//             res(200);
//         }, 2000)
//     })
// }

// async function getWeather() {
//     await api();
//     await api()
// }


// that is the same think i do with  callbacks hell and promise but now  we use aysnc and await

// function getdata(dataid) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("I am from data id " + dataid);
//             resolve("suc");
//         }, 2000);
//     });
// }

// async function fetchData() {
//     await getdata(1);
//     console.log("Getting data2......");
//     await getdata(2);
//     console.log("Getting data3......");
//     await getdata(3);
//     console.log("Getting data4......");
//     await getdata(4);
// }