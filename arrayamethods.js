// ..................Array.at().......................

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);

// ..................Array.at().......................

const array2 = [1, 2, 3, 4];

console.log(array2.fill(0, 2, 4));
console.log(array2.fill(5, 1));
console.log(array2.fill(6));

// ..................Array.filter()......................

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);


// ..................Array.find().........................

const arrayfind = [5, 12, 8, 130, 44];

const found = arrayfind.find(element => element > 10);

console.log(found);


// ..................Array.findIndex().......................

const arrayfindindex = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(arrayfindindex.findIndex(isLargeNumber));

// ..................Array.findLast().......................

const array4 = [5, 12, 50, 130, 44];

const KUCHBHI = array4.findLast((element) => element > 45);

console.log(KUCHBHI);

// ..................Array.findLastIndex().......................

const array5 = [5, 12, 50, 130, 44];

const isALargeNumber = (element) => element > 45;

console.log(array5.findLastIndex(isALargeNumber));


// .................. Array.flat()...............................

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));

// ..................  Array.forEach().............................
const ARRAYFOREACH = ['a', 'b', 'c'];

ARRAYFOREACH.forEach(element => console.log(element));

// ..................  from().............................

console.log(Array.from([1, 2, 3], x => x + x));


// .................. Map.............................

const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

console.log(doubles); 
console.log(numbers); 

// .................. reduce()............................


const arr6 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = arr6.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

// .................. reduce()............................

const arr7 = [[0, 1], [2, 3], [4, 5]];

const anything = arr7.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(anything);


// .................. reverse()............................

const num = [3, 2, 4, 1, 5];
const reversed = num.reverse();

reversed[0] = 5;
console.log(num[0]); 

// ......................Array.shift().........................


const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}

// .....................Array.slice().........................


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));

// ..................... Array.some().........................



function isBiggerThan10(element, index, array) {
    return element > 10;
  }
  
  [2, 5, 8, 1, 4].some(isBiggerThan10); 
  [12, 5, 8, 1, 4].some(isBiggerThan10); 

// ..................... Array.sort().........................

const numbers2 = [3, 1, 4, 1, 5];
const sorted = numbers2.sort((a, b) => a - b);

sorted[0] = 10;
console.log(numbers2[0]); 


// ..................... Array.toSpliced().........................


const arr8 = [1, , 3, 4, , 6];
console.log(arr8.toSpliced(1, 2));

// const months3 = months2.toSpliced(2, 2);
// console.log(months3);

// const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
// console.log(months4); 

// console.log(months); 

// ..................... Array.toString().........................

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(matrix.toString());

  // ..................... Array.values().........................

  const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();

for (const letter of iterator) {
  console.log(letter);
} 

  // ..................... Array.with().........................

const arr5 = [1, 2, 3, 4, 5];
console.log(arr5.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr5); // [1, 2, 3, 4, 5]