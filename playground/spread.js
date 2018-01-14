// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Randy', 'Philip'];
// var groupB = ['Bob'];
//
// var final = [...groupB, ...groupA];
//
// console.log(final);

var person = ['Joe', 50];
var personTwo = ['Jenni', 48]
//Hi Joe, you are 50
function greeter (name, age) {
  return "Hi " + name + ", you are " + age;
}
console.log(greeter(...person));
console.log(greeter(...personTwo));

//loop over array and print greeting for each element of the combined arrays
var names = ['Mike', 'Ben'];
var final = ['Joe'];

final.push(...names);

final.forEach(function(el){
  console.log("Hello " + el);
});
