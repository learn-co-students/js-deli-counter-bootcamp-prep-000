var katzDeli = [];

function takeANumber(array, customer) {
  array.push(customer)
  return `Welcome, ${customer}. You are number ${array.length} in line.`
}

function nowServing(array) {
  if (array.length > 0) {
    var name = array.shift();
    return (`Currently serving ${name}.`);
  } else {
    return ("There is nobody waiting to be served!");
  }
}

function currentLine(line) {
  var array = [];
  var lastArray = [];
  for (var i = 0; i < line.length; i++) {
    var newArrays = [];
    newArrays.push([i+1], line[i]);
    var secndArray = newArrays.join(". ");
    array.push(secndArray); 
  }
  lastArray = array.join(", ");
  
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    return `The line is currently: ${lastArray.toString()}`
  }
}