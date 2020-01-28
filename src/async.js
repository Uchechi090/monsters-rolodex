//Promise explained - Asynchronous operation
const myPromise = new Promise((resolve, reject) => { //it is a constructor that takes two arguments: resolve and reject
    if (false) {
        setTimeout(() => {
            resolve("I have succeeded");
        }, 1000);
    } else {
        reject("I have failed")
    }
});

myPromise.then(value => value + "!!!!") //to get the resolve value, use "then" because ".then" wraps the returned value in a resolved promise; hence you can chain as many ".then" as possible 
.then(newValue => console.log(newValue))    
.catch(rejectValue => console.log(rejectValue)) // catch gives the reject value