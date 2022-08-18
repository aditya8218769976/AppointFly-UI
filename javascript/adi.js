// recursive function//

// function countDown(X) {
//   console.log(X);
//   const newNumber = X - 1;

//   if (X > 0) {
//     countDown(newNumber);
//   }
// }
// countDown(5);

// recursive function ends here//

// Sum Of Arrays start here//

// function sumArray(array) {
//   const ourArray = [10, 4, 10, 9, -3];
//   let sum = 0;

//   for (let i = 0; i < ourArray.length; i += 1) {
//     sum += ourArray[i];
//   }

//   return sum;
// }

// console.log(sumArray([10, 4, 10, 9, -3]));

// for loop array sum starts here .............//

// let numbers = [2, 4, 6, 28, 10];
// function sumOfAll(array1) {
//   //   const ourArray = numbers;
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i];
//   }

//   console.log(sum);
// }
// sumOfAll(numbers);

// for loop array sum ends here..............//

// sum of array by for.each loop starts here ............. //

// function sumArray(array) {
//   let sum = 0;

//   array.forEach((item) => {
//     sum += item;
//   });

//   console.log(sum);
// }

// sumArray([23, 43, 56, 67]);

// // sum of array by for.each loop ends here............... //

// sum of array by forEach loop method starts here...............//

// function adi(adi1) {
//   let sum = 0;
//   adi1.forEach((item) => {
//     sum += item;
//   });
//   console.log(sum);
// }
// adi([2, 3, 4, 5, 6]);

// sum of array by forEach loop method ends here...............//

// sum of array by for Of loop method starts here...............//

// function sumArray(arr) {
//   let sum = 0;
//   for (const add of arr) {
//     sum += add;
//   }
//   console.log(sum);
// }
// sumArray([50, 30, 40, 50]);

// // sum of array by for Of loop method ends here...............//

// how to find index value without inbuilt function start here..........//

// const findIndex = function (array1, array2) {
//   for (i = 0; i < array1.length; i++) {
//     if (array1[i] === array2) {
//       return i;
//     }
//   }
// };
// console.log(findIndex([2, 3, 4, 5, 6, 7], 3));

// function findIndex(index, num2) {
//   for (i = 0; i < index.length; i++) {
//     if (index[i] === num2) {
//       return i;
//     }
//   }
// }
// const index = [2, 3, 4, 5, 6, 7, 8];
// console.log(findIndex(index, 6));

// function findIndex(num1) {
//   let i = 0;
//   num1.forEach((item) => {
//     if (i++ === item) {
//       return i;
//     }
//   });
// }
// console.log(findIndex([2, 3, 4, 5, 6, 7], 5));
// var myArray = [123, 15, 187, 32];hhhuyftrdrtrddddddd////
// var findNumber = 123;
// myArray.forEach(value, (index) => {
//   if (findNumber === value) {
//     console.log(index);
//   }
// });

// find even + odd value by forEach method of function//...............//

// let num = [3, 2, 4, 5, 6, 7, 8, 9, 12, 23, 34, 45, 56];

// let evenNum = 0;
// let oddNum = 0;

// num.forEach((value, index) => {
//   if (index % 2 === 0) {
//     return (evenNum = evenNum + value);
//   } else if (index % 2 === 1) {
//     return (oddNum = oddNum + value);
//   }
// });
// console.log(evenNum + oddNum);

// find even + odd value by forEach method of function ends here//...............//

// by for loop method//.............///

// let num = [3, 2, 4, 5, 6, 7, 8, 9, 12, 23, 34, 45, 56];

// let evenNum = 0;
// let oddNum = 0;

// for (let i = 0; i < num.length; i++) {
//   if (num[i] % 2 === 0) {
//     evenNum = evenNum + num[i];
//   } else if (num[i] % 2 === 1) {
//     oddNum = oddNum + num[i];
//   }
// }

// console.log(evenNum + oddNum);

// for loop ends here//.............................../////////

//  product of arrays start here..............................//

// function multiply(array) {
//   var sum = 1;
//   for (var i = 0; i < array.length; i++) {
//     sum = sum * array[i];
//   }
//   return sum;
// }
// console.log(multiply([1, 2, 3, 4, 5, 6]));

// product of arrays ends here./////////////....................//

// search string by value starts here........................///

// const index = ["Aditya", "Sahil", "Daboo", "Rana"];
// function findIndex(index, num2) {
//   for (i = 0; i < index.length; i++) {
//     if (index[i] === num2) {
//       return i;
//     }
//   }
// }

// console.log(findIndex(index, "Rana"));

// search string by value ends here........................///

// Addition of 1-D array element starts here...........////

// var guru = [10, 20, 30, 40];

// let sum = 0;

// guru.forEach((element) => {
//   sum = sum + element;
// });
// console.log(sum);

// Addition of 2-D matrix element starts here..............////

// var adi = [
//   [2, 3, 4],
//   [5, 6, 7],
// ];

// let sum = 0;

// for (let i = 0; i < adi.length; i++) {
//   adi[i].forEach((adi1) => {
//     sum = sum + adi1;
//   });
// }

// console.log(sum);

// Addition of 2-D matrix element ends here..............////

// Addition of 3-D matrix elements start here............///

// var threeD = [[[10, 20, 30, 40, 50]], [[1, 2, 3, 4, 5]], [[2, 4, 6, 8, 10]]];

// let sum = 0;

// for (let i = 0; i < threeD.length; i++) {
//   threeD[i].forEach((element) => {
//     for (let j = 0; j < element.length; j++) {
//       sum = sum + element[j];
//     }
//   });
// }
// console.log(sum);

// Addition of 3-D matrix ends here.................////

// Array of objects starts here...........///

// var results = [
//   { name: "Naman", marks: 42 },
//   { name: "Nikhil", marks: 82 },
//   { name: "Nittin", marks: 52 },
//   { name: "Rahul", marks: 48 },
// ];

// let sum = 0;
// for (var i = 0; i < results.length; i++) {
//   if (results[i].name == "Naman") {
//     sum = results[i];
//   }
//   for (var j = 1; j < sum.length; j++) {
//     if (results[j].name == "Nikhil") {
//       sum = results[j];
//     }
//   }
//   for (var j = 2; j < sum.length; j++) {
//     if (results[j].name == "Nittin") {
//       sum = results[j];
//     }
//     break;
//   }
// }

// console.log(results[j]);

// console.log(sum["name"], [i]);

// for (let index = 0; index < results.length; index++) {
//   console.log(results[index].name + " " + results[index].marks);
// }

// /Array of objects ends here ........////

// how to sort array element alphabetically by sort() method. starts here.................//////////

// var myarray = ["Bob", "Bully", "Amy"];

// console.log(myarray.sort());

// var a = [
//   { FirsName: "Aditya", LastName: "Mishra" },
//   { FirstName: "Sahil", LastName: "Kandari" },
// ];
// function SortArray(x, y) {
//   if (x.LastName < y.LastName) {
//     return -1;
//   }
//   if (x.LastName > y.LastName) {
//     return 1;
//   }
//   return 0;
// }
// var devil = a.sort(SortArray);
// console.log(devil);

// var a = [
//   { FirstName: "Aditya", LastName: "Mishra" },
//   { FirstName: "Sahil", LastName: "Kandari" },
//   { FirstName: "Nikhil", LastName: "Mishra" },
//   { FirstName: "Rachit", LastName: "Rawat" },
// ];
// function adi(x, y) {
//   if (x.FirstName < y.FirstName) {
//     return -1;
//   }
//   if (x.FirstName < y.FirstName) {
//     return 1;
//   }
//   return 0;
// }
// var devil = a.sort(adi);
// console.log(devil);

// how to sort array element alphabetically by sort() method. ends here.................//////////

// how to sort array element alphabetically without sort() method. starts here.................//////////

let ascend = (array) => {
  const array2 = [];
  let position = 0,
    max = [0],
    min = [0];

  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  for (let j = 0; j < array.length; j++) {
    for (let k = 0; k < array.length; k++) {
      if (array[k] != null) {
        if (min > array[k]) {
          min = array[k];
          position = k;
        }
      }
    }
    array2[j] = min;
    array[position] = null;
    min = max;
  }
  return array2;
};

let arry = [1, 2, 34, -2, -4];
console.log(ascend(arry));

// // how to sort array element alphabetically without sort() method. ends here.................//////////
