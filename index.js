// Take a callback function as an argument
function receivesAFunction(cb) {
  // Call the callback function
  return cb();
}

// Take no arguments
function returnsANamedFunction() {
  // Return a named function
  return function namedFunction() {
    console.log("I'm returning a named function!");
  };
}

// Take no arguments
function returnsAnAnonymousFunction() {
  // Return an anonymous function
  return function () {
    console.log("I'm returning an anonymous function!");
  };
}
