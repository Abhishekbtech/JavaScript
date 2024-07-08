// Write a function that takes two arrays as arguments and returns a new array with unique values from both arrays.

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [3, 4, 5, 6, 7]     // res = [i, 2 ,3, 4, 5 ]

let arr6 = [...arr1, ...arr2]
let arr7 = [...new Set(arr6)]
console.log(arr7)

// const unid = ((arr1, arr2) => {
//     let arr3 = []
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i] == arr2[j]){
//                 arr3.push(arr1[i])
//             }
//         }
//     }
//     return arr3
// })

// console.log(unid(arr1, arr2))


// const uniqueVal = ((arr1, arr2) =>{
//     return arr1.filter(x =>!arr2.includes(x)).concat(arr2.filter(x =>!arr1.includes(x)));
// })

// console.log(uniqueVal(arr1, arr2))

