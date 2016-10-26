function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  var n = katzDeliLine.length;
  if (n === 0) {
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  var n = katzDeliLine.length;
  var string = [];
  if (n === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < n; i++){
      string.push(`${i+1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently: ${string.join(", ")}`;
  }
}
