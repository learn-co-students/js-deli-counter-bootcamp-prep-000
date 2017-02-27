var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  return `Welcome, ${newName}. You are number ${katzDeliLine.length + 1} in line.`;
  katzDeliLine.push(newName);
}

function nowServing() {
  if(katzDeli.length !== 0) {
    return katzDeli.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine() {
  var line = [];
  if(katzDeli.length !== 0) {
    for(var i = 0; i < katzDeli.length; i += 1) {
      line.push(`${[i+1]}.${katzDeli[i]}`);
    }
  } else {
    return "The line is currently empty."
  }
  return `The line is currently: ${line.join(", ")}`;
}
