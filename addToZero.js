// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:


// let results = true
// for (let i = 0; i < array.length; i++){
//     for (let n = 0; n < array.length; n++)
//         if(array[i] + array[n] === 0){
//         console.log(results)
//         break;
//     } else if(array[i] + array[n] != 0){
//         console.log(false)
//     }
// }




// let results = true
// for (let i = 0; i < array.length; i++)
//     for (let n = 0; n < array.length; n++){
//         if(array[i] + array[n] !== 0) {
//             results = false;
//         } else {
//             results = true;
//         }
//     }

// console.log(results);


//correct solution 1

let answer = false
for(let i=0; i<=array.length; i++){
    for(let k=i+1; k<array.length; k++){
        if(array[i] + array[k] === 0){
            answer = true
        }
    }
}
console.log(answer)