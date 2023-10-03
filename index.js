function receivesAFunction(callback) {
    console.log("Sky");
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
    }
}

function returnsAnAnonymousFunction(){
    return function() {
    }
};