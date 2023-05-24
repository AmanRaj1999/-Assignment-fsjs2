function add(a, b, c) {
  return a + b + c;
}

// Currying the add function
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Using the curried function
console.log(curryAdd(2)(3)(4)); //output:9
