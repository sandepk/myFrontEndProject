console.clear()
console.log("Welcome to Array learning ! Happy learning..")

//1.
var fruits = ['Apple', 'Banana'];

console.log(fruits.length);  // 2

fruits.forEach((e,i) => console.log(e,i));//value and index.

//Add to the end of an Array.
var newLength = fruits.push('Orange');
console.log("keys are",Object.keys(fruits));

//Iteration methods..
var charArr = ['a', 'b', 'c'];
var iterator = charArr.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
console.clear();
//3.
var myRe = /d(b+)(d)/i;
var myArray = myRe.exec('cdbBdbsbz');
console.log(myArray)

//4.

let isLetter = (c => c >= 'a' && c <= 'z');
let flag = Array.from("hJyjon").every(isLetter)
console.log(flag)
// console.log(Array.from('abcd'))
/* if (Array.every("hey jon", isLetter)) {
  console.log("The string '" + str + "' contains only letters!");
} */
console.clear()
let student = {name : 'roahan',rollNo : 105,dept : 'cse'}
const {name,dept} = studentf;
console.log(name, dept)


