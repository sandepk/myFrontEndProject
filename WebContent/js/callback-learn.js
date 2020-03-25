console.clear()
console.log("welcome to callback learning !")
console.clear()
//1. super cool example..
let add = (a, b) => a + b;
let multiply = (a, b) => a * b;
let dowhatever = (a, b) => `You Entered the numbers : ${a} and ${b}`;

//callback is not a keyword its just any name.

let calc = function (num1, num2, callback) {
    // let innerCallBackFn = () => console.log('Inner callback')
    return callback(num1, num2);
}

//calling
console.log(calc(3, 5, add));
console.log(calc(2, 6, dowhatever));

//we can pass the inline callback function in place to add or dowhatever
var arr = [];
console.log(calc(4, 5, (a, b) => a - b))//inline callback function

//ex- 2 -sorting
let student1 = {
    id: 45,
    name: "Pannu"
}
let student2 = {
    id: 15,
    name: "Zunu"
}
let student3 = {
    id: 35,
    name: "Onnu"
}
let sList = [student1, student2, student3];
console.log("orignial array ", sList)
sList.sort((s1, s2) => {
    if (s1.name < s2.name) {
        return -1;
    }
    if (s1.name > s2.name) {
        return 1;
    }
    return 0;
})
console.log("after sort", sList)

//call inner func.
function initValidation() {
    // irrelevant code here
    function validate(_block) {
        console.log("test", _block);
    }

    initValidation.validate = validate;
}

initValidation();//this line is imp.
initValidation.validate("hello");
//test hello




