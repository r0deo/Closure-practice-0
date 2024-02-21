

// Task 1
// Don't change the function name.
function createSummer() {
  let sum = 3; // initial value

  function summer(num) {
    if (num === undefined) {
      return sum; // return the last sum when called without an argument
    } else {
      sum += num; // sum with the inner variable
      return sum; // return the updated sum
    }
  }
  return summer; // return the inner function as a closure
}

// Create an instance of the closure
const mySummer = createSummer();
// Test the closure
console.log(mySummer(3)); // Output: 6



// Task 2
// Don't change the variable name.
 
  let obj = {
  name: 'Ali',
  id: 2,
  toString: function(){
    return `Name: ${obj.name} Id: ${obj.id}`;
  }
};
console.log(obj.toString())



// Task 3 
// Don't change the variable name.
let obj2 = {
  name: "Coridge",
  password: 2299,
  validate: function(p){
    return p === obj2.password;
  }
};

console.log(obj2.validate(29));

// IMPORTANT: don't delete this, or the tests would fail!
module.exports = {
  obj,
  obj2
};