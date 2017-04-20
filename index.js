var katzDeliLine = []
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return (`Currently serving ${katzDeliLine.shift()}.`)
      /*return (`Currently serving ${name}`);*/
  }
  /*katzDeliLine.shift();*/
}
function currentLine(katzDeliLine) {
  var element1 = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
      for (var i = 0; i < katzDeliLine.length ; i++) {
        // 1. Bill --> `${i+1}. ${katzDeliLine[i]}`
        element1.push(`${i+1}. ${katzDeliLine[i]}`);
      }
      return `The line is currently: ${element1.join(', ')}`;

  }
return (`"The line is currently: ${katzDeliLine[name]}. ${name}"`);
}
