var katzDeli = [];

function takeANumber(katzDeliLine, newCustomer) {
  var i = katzDeliLine.length
      katzDeliLine.push(newCustomer);
      return (`Welcome, ${newCustomer}. You are number ${i + 1} in line.`);
    }
  //Use length when length of array is unknown

function nowServing (n) {
  if (n.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = n[0];
    n.shift();
    return (`Currently serving ${name}.`);
  }
}
//You can manipulate an array by adding a var and not changing the original
//If line equals zero return statement nobody in line
//Number is indexed and shifted or removed from the beginning of line

function currentLine(n) {
  for (let i = 0; i < line.length; i++);
  if (katzDeliLine > 0) {
    return (`The line is currently: ${i}. ${name}`)
  } else {
    return "The line is currently empty."
  }
}
//Let is scoped differently than var; only available to the nearest code block

function currentLine(array) {
  var listNumber = [];
  var string1 = "The line is currently:"
  if (array.length === 0) {
    return "The line is currently empty."
  }
    for (var i = 0; i < array.length; i++) {
      listNumber.push(` ${i + 1}. ${array[i]}`);
      var string2 = string1 + listNumber.join();
      }
    return string2
  }
  //Punctuation marks need to be placed out of curly braces to work properly
  //Concatenating is a variable plus a string
  //Interpolation is ${variable} inside of a string
  //functions can only have one return value
  //const is a constant as oppose to a variable
  //var has global availability and can be accessed anywhere
  //join adds commas in a returned array
  //Spaces in the interpolation will change the returned string
