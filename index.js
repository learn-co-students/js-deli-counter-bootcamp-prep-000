var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ` + katzDeliLine.length + " in line.";
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
      return `Currently serving ${katzDeli.shift()}.`;
    }
}

var lineOrder = [];
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
    else {
      for (var i = 0; i < katzDeliLine.length; i++) {
        lineOrder.push(` ${i + 1}. ${katzDeliLine[i]}`);
      }
      return `The line is currently:${lineOrder}`
    }
  }

