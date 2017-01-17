var katzDeliLine = [];

function takeANumber(array, name) {
  array.push(name);
  var n = array.length;
  return `Welcome, ${name}. You are number ${n} in line.`;
}

function currentLine(katzDeli) {
if (katzDeli.length === 0) {
  return "The line is currently empty."
} else {
  var myString = "The line is currently:"
  for (let i=0; i<katzDeli.length-1; i++) {
    myString = myString + ` ${i+1}. ${katzDeli[i]},`
    }
  } return myString + ` ${katzDeli.length}. ${katzDeli[katzDeli.length-1]}`
}

function nowServing(array) {
  if (array.length < 1) {
    return `There is nobody waiting to be served!`;
  }
  else {
    var name = array[0];
    array.shift();
    return `Currently serving ${name}.`;
  }
}
