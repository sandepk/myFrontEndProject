"use strict"
///////////////// ///////////   let keyword          ///////////
function testVar(){
    let a = 30;
    if(true) {
        let a = 50;
        console.log(a);
    }
    console.log(a);
}
// testVar()
function test(){
    var foo = 33;
    if (true) {
       let foo = (foo + 55); // ReferenceError
    }
 }
 //test();
 function go(n) {
    // n here is defined!
    console.log(n); // Object {a: [1,2,3]}
  
    for (let n of n.a) { // ReferenceError
      console.log(n);
    }
  }
  
  //go({a: [1, 2, 3]});
// setTimeout(testVar,1000);
/*for(let i=0; i<10; i++) {
    console.log(i);
}*/
//////////////////////////////     const keyword   //////////
console.clear();
const colors = [];
colors.push("red");
colors.push("green");
//colors = '';//Error : Assignment to constant variable.
console.log(colors);

//ex 2
const number = 42;

try {
  number = 99;
} catch(err) {//bcoz of this try catch my rest of the flow are not breaking.. super cool.isn't it.
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42

//////////////////////////////////   class concept    ////////////////
console.clear()
class User {
    constructor(uname, email, pwd) {
        this.uname =  uname;
        this.email = email;
        this.pwd = pwd;
    }
    /* constructor(uname, email) {
        this.uname =  uname;
        this.email = email;
    } */
    static getCount() {
        console.log(this ,"50 users are registered !");
    }
    register() {
        console.log(this.uname + ' has been registered !');
    }
}
let bob = new User('bob', 'bob3@gmail.com','4321');
bob.register();
User.getCount();
/////////////////  Inherit Class ///////////
class Student extends User {
    constructor(uname, email, pwd, grade) {
        super(uname, email, pwd);
        this.grade = grade;
    }
    static getCount() {
        console.log("70 users are registered !");
    }
    getGrade() {
        console.log(this.uname + ' has got the grade : '+ this.grade );
    }
}
let jon = new Student('jon','job_email','3434', 56);
jon.getGrade();
// Student.register() -error : not a function.
////////////////////////////////////////   Template Concept //////////////
//console.clear();
let name = 'Jon';
let template = `
    <title>yooo ${name} -it is a template in javaScript</title>`;
    var a = 5;
    var b = 10;
    console.log(`Fifteen is ${a + b} and
    not ${2 * a + b}.`);
    // nested template literals:
    let isLargeScreen = () => false;
    const classes = `header ${ isLargeScreen() ? '' :
 `icon-${5 ==2+3 ? 'expander' : 'collapser'}` }`;
 console.log(classes)
    //we can pass function too in template.
//document.getElementById('headId').innerHTML = template;

///////////////////// New String Methods //////////////
//new methods are = startsWith, endsWith, include. include is like contains method in java string.

////////////////////////// Default & Spread //////////////
function greet(greetMsg="Hello World") {
    console.log(greetMsg);
}
//greet();

let params = [ "hello", true, 7 ]
let other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

function f (x, y, ...a) {
    console.log(arguments);
    return (x + y) * a.length
}
//console.log(f(1, 2, ...params))
//console.log(f(1,2,3,4,5,params));//3,4,5,params all 4 goes to ...a .and a.length = 4
// in func f, if we define params like (x, y, a) ,than a contains the first element of array if we do pass array for a.

let str = "foo"
let chars = [ ...str ] // [ "f", "o", "o" ]

function sortRestArgs(...theArgs) {
    var sortedArgs = theArgs.sort();
    return sortedArgs;
  }
  
  //console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7


///////////////  SET, MAP, WEEKSET, WEEKMAP /////////////////
let numArr = [2,4,6,2,4,6];
let mySet = new Set(numArr);
//console.log(mySet)

let m = new Map()
let s ="soo"// Symbol()
m.set("hello", 42)
m.set(s, 34)
m.get(s) === 34
m.size === 2
for (let [ key, val ] of m.entries())
    //console.log(key + " = " + val)

/////////////////// Arrow Function /////////////
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

  
  //console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]
 // console.log(materials.map(({ length }) => length*2)); // [8, 6, 7, 9]
  //explore the just above line more...
  let bob2 = new User('bob2', 'bob2@gmail.com','4321');
  let neo = new User('neo', 'neo@gmail.com','4321');
  let tom = new User('tom', 'tom@gmail.com','4321009');
  let userList = [bob, bob2, neo, tom];
  //userList.map(({uname,email}) =>    console.log(uname + " has email = "+email) )    ;

  //////////// sortend function in object /////
  var obj = {
    foo() {//NOTE : function keyword is not used here. so great!
      return 'bar';
    }
  }
  
 // console.log(obj.foo());
  // expected output: "bar"
  //NOTE learn reduce method in array
  let numArr2 = [1,3,5,8,7];
  //console.log( numArr2.reduce( (prev,current) =>  prev + current ) );
  console.log (numArr2.slice(0,2));//slice returns the portion of array
  

 /* function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));//NOte: without triple dot,numbers array will be assigned to x and 
  //so, y and z will be still undefined.
  // expected output: 6  */
  ///// A better way to concate array //
  numArr = numArr.concat(numArr2);
  console.log(numArr);


  