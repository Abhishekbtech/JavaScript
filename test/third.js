// Given a sorted array of integers, find two elements that sum up to a given target.

let arr = [1, 2, 3, 4, 5]

let target = 6

// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i] + arr[j] === target){
//             console.log(arr[i], arr[j])
//         }
//     }
// }

function findAllPairs(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    const pairs = [];

    while (left < right) {
        const currentSum = arr[left] + arr[right];

        if (currentSum === target) {
            pairs.push([arr[left], arr[right]]);
            left++;
            right--;
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    return pairs.length ? pairs : null;
}


const result = findAllPairs(arr, target);
console.log(result);