// Function tha adds two numbers
function add(n1, n2){
    return n1 +n2;
 }

 // Function that subtracts two numbers
const sub = function(n1,n2){
    return n1 - n2
  } 

const mul = function(n1,n2){
    return n1 * n2
  }
  // Function that takes two numbers and a callback function
  const cb = function(n1, n2, callback) {
    if (typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function") {
      return "Result from the two numbers: " + n1 + " + " + n2 + " = " + callback(n1, n2);
    } else {
      return "Invalid arguments: Wrong input";
    }
  };
  
/*
The ...rest syntax collects any additional arguments into an array called rest. 
This allows the function to handle an arbitrary number of numbers to be added together.
*/
function addV2(n1, n2, ...rest){
    return n1 +n2 + rest.reduce((acc,cur)=> acc +cur)
 }

console.log( "Task 1: " ) 
console.log( add(1,2) ) 
console.log( "Task 2: " ) 
console.log( add )
console.log( "Task 3: " )
console.log( add(1,2,3) )
console.log( "Task 4: " )
console.log( add(1) )
console.log( "Task 5: " )
console.log( cb(3,3,add) )
console.log( "Task 6: " )
console.log( cb(4,3,sub) )
console.log( "Task 7: " )
console.log(cb(3,3,add())); // What will it print (and what was the problem)
console.log( "Task 8: " )
console.log(cb(3,"hh",add))
console.log( "Task 9: " )
console.log(addV2(1,2,3,4,5,6))
console.log( "Task 10: " )
console.log(cb(3,3,mul)); 
console.log( "Task 11: " )
console.log(cb(3,3, mul))
console.log( "Task 12: " )
console.log(cb(6, 2, function(n1, n2) {
    return n1 / n2;
  })); 


