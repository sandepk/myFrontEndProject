'use strict';
console.log("class.js loaded !!")

// module "my-module.js"
function cube(x) {
    return x * x * x;
  }
  const foo = Math.PI + Math.SQRT2;
  var graph = {
      options:{
          color:'white',
          thickness:'2px'
      },
      draw: function(){
          console.log('From graph draw function');
      }
  }
  


  export { cube, foo, graph };


 class User {
    constructor(uname, email, pwd) {
        this.uname = uname;
        this.email = email;
        this.pwd = pwd;
    }
    static getCount() {
        console.log("50 users are registered !");
    }
    register() {
        console.log(this.uname + ' has been registered !');
    }
}
let bob = new User('bob', 'bob3@gmail.com', '4321');
//bob.register();
//User.getCount();
/////////////////  Inherit Class ///////////
class Student extends User {
    constructor(uname, email, pwd, grade) {
        super(uname, email, pwd);
        this.grade = grade;
    }
    static getCount() {
        console.log("50 users are registered !");
    }
    getGrade() {
        console.log(this.uname + ' has got the grade : ' + this.grade);
    }
}
let jon = new Student('jon', 'job_email', '3434', 56);
//jon.getGrade();