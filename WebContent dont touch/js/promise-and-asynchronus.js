console.log("welcome to promise and async chapter.")
var promise = new Promise((resolve, reject) => {
    var url = "https://jsonplaceholder.typicode.com/posts/1/";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.responseText);
    xhr.send(null);

});

let p1 = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function () {
        resolve("success"); // Yay! Everything went well!
    }, 3000);
});
//then syntax
//p.then(onFulfilled[, onRejected]);//arguments are callback functions.
//below,first callback is for success and second is for failure !!
/*p1.then((success) => console.log("success message = " + success), (failure) => console.log("failure message =" + failure))
console.log("intermediate")*/

Promise.resolve('foo')
    // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
    .then(function (string) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                string += 'bar';
                resolve(string);
            }, 2000);
        });
    })
    // 2. receive "foobar", register a callback function to work on that string
    // and print it to the console, but not before returning the unworked on
    // string to the next then
    .then(function (string) {
        setTimeout(function () {
            string += 'baz';
            console.log(string);
        }, 1000)
        return string;
    })
    // 3. print helpful messages about how the code in this section will be run
    // before the string is actually processed by the mocked asynchronous code in the
    // previous then block.  
    .then(function (string) {
        console.log("Last Then:  oops... didn't bother to instantiate and return " +
            "a promise in the prior then so the sequence may be a bit " +
            "surprising");

        // Note that `string` will not have the 'baz' bit of it at this point. This 
        // is because we mocked that to happen asynchronously with a setTimeout function
        console.log(string);
    });