//variable

var msg = "Hello Console log window from variable.";
//console.log("Hello Console log window.");

console.log(msg);
console.log(typeof msg);    //string
console.log(msg.toUpperCase()); //
console.log(msg.toLowerCase()); //
console.log(msg.split(" ").join("   "));    // seperated by space" " --> it will become an array, to join the array we use the join()method
console.log(msg.split("").reverse().join(""));

//numbers

var a= 10;  //number

var b = "19";   //string

console.log("type of "+a+" = "+ typeof a);

console.log("type of "+b+" = "+ typeof b);

var c = parseInt("30.764");
var d = parseFloat("30.764");

console.log("type of "+d+" = "+ typeof d);
console.log(isNaN(c));    //isNaN is not a number will tell whether it is a number or not
console.log(d.toFixed(2));  // toFixed will round off the numbers.