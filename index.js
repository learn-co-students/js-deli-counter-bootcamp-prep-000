
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let i = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${i} in line.`;
}

function nowServing(katzDeliLine) {
  var lineLength = katzDeliLine.length;
  if (lineLength>0) {
    let nextPerson = katzDeliLine.shift();
    return `Currently serving ${nextPerson}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  let lineLength = katzDeliLine.length;
  if (lineLength === 1) {
      return 'The line is currently: 1. '+ katzDeliLine[i] + '.'
    } else if (lineLength > 1) {
      for ( var i = 0; i < lineLength; i++) {
    let n = katzDeliLine.indexOf(katzDeliLine[i+1])
    let arr = []
    let names = n + '. ' + katzDeliLine[i]
    let lastName = n
    arr.push(names)
    return 'The line is currently: ' + arr
  } 
  } else {
    return "The line is currently empty."
  }
}

var katzDeli = ['Nicole', 'Bea', 'Sam'];
console.log(currentLine(katzDeli));