const foo = { name: 'tom', age: 30, nervous: false };
const bar = { name: 'dick', age: 40, nervous: false };
const baz = { name: 'harry', nervous: true, marks: 100, adderss: "hill garden", phone: "3243243" };


'Bad Code 💩'

console.log(foo);
console.log(bar);
console.log(baz);



'Good Code ✅'

// Computed Property Names

console.log('%c My Friends', 'color: orange; font-weight: bold;')
console.log({ foo, bar, baz });

// Console.table(...)
console.table([foo, bar, baz])


// // Console.time
console.time('looper')

let i = 0;
while (i < 1000000) { i++ }

console.timeEnd('looper')

// // Stack Trace Logs

const deleteMe = () => console.trace('bye bye database')

deleteMe()
// deleteMe()
