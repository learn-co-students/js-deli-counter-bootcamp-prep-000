// # Deli Counter Lab
//
// ## Objectives
// 1. Add elements to an array
// 2. Return items from an array
// 3. Iterate through an array
// 4. Pass an array as a function parameter
//
// ## Instructions
//
// A pretty important deli needs somebody to program the "Take a Number"
//feature for their counter.
//
// At the beginning of the day, the deli is empty and is represented by an empty
 // array, like `var katzDeliLine = [];`.However,  you don't need to code the array
 // as a variable, since the test scripts will create it and pass it to the
 // functions you are about to build.
//
//
// 1. Build a function that a new customer will use when entering the deli.
//The function, `takeANumber`, should accept two paramaters: the current line
//of people, along with the new person's name. The function should return a
//welcome message including the new person's position in line, such as
//`"Welcome, Ada. You are number 1 in line."`. And don't go being too programmer-y
//and give them their index. These are normal people. If they are 7th in line,
//tell them that. Don't get their hopes up by telling them they are number 6 in line.
// takeANumber(katzDeliLine, "Matz"); // "Welcome, Matz. You are number 1 in line."

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return 'Welcome, ' + newPerson + '. ' + 'You are number ' + katzDeliLine.length + ' in line.'
}

// console.log(takeANumber(['Ada', 'Jonnie', 'Annie'], 'Brandon'));
//

// 2. Build a function `nowServing`. This function should accept the current
//line of people (`katzDeliLine`) and return the first person in line and then
//remove that individual from the line. If there is nobody in line,
//it should return "There is nobody waiting to be served!"
// nowServing(katzDeliLine); // "Currently serving Grace."


// console.log(nowServing(['brandon', 'nick', 'boots']));
// console.log(nowServing([]));
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  // console.log('before shift:', katzDeliLine);
  var currentPerson = katzDeliLine.shift();
  // console.log('after shift:', katzDeliLine);
  return 'Currently serving ' + currentPerson + '.';
}



// 3. Build a function `currentLine` that accepts the current line of people
//and returns the current line as a string; for example, if 'katzDeliLine' is
//currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return
//`"The line is currently: 1. Ada, 2. Grace"`.  You don't have to use `katzDeliLine`
//as a variable or parameter name in your function though, it's just an example
//of a variable that might be passed to it. If there is nobody in line, it should
//return `"The line is currently empty."`
// currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

console.log(currentLine(['boots', 'henry', 'jacqueline', 'chris']));
console.log(currentLine([]));

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }

  var positionInLine = [];

  for (var i = 0; i < katzDeliLine.length; i++) {
    var person = katzDeliLine[i];
    positionInLine.push((i + 1) + '. ' + person);
  }

  return 'The line is currently: ' + positionInLine.join(", ")
}
