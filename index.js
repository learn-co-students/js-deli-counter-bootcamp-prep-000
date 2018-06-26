var number = 0;

function takeANumber(katzDeli) {
  number++;
  return `Welcome. You are number ${katzDeli.push(number)} in line.`;
}

function nowServing (katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving #${katzDeli.shift()}.`;
  }
}

/*function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var line = "";
    for (var i=0; i < katzDeli.length-1; i++) {
      line += `${i+1}. ${katzDeli[i]}, `;
    }
    return `The line is currently: ${line}${katzDeli.length}. ${katzDeli[katzDeli.length-1]}`;
  }*/
}
