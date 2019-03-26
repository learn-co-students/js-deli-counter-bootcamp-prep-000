//represented in deliLine by their number
var deliLine = [];
var i = 1;

function takeANumber(deliLine) {
  //give ticket #1 to first person, #2 to second, and so on
  //should not reset
  //every time deliLine is called, push ticket
  deliLine.push(i);
  i++;
  return `Welcome! Your ticket number is ${i-1}, and you are number ${deliLine.length} in line!`;
  
  //ticket number independent of their place in line
  //ticket number 4 can be second in line
}

function nowServing(deliLine) {
  return `Now serving ticket number ${deliLine.shift(1)}.`;
}