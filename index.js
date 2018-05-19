var katzDeli = [];

function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
}

var katzDeliLine = ['jim', 'bob', 'alice'];

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } 
}

function currentLine(katzDeliLine) {
  var array = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (let i=0; i < katzDeliLine.length; i++) {
      array.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
  }
  return 'The line is currently:' + array;
}