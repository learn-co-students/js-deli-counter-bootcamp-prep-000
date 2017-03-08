function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;  
}

function nowServing(katzDeliLine) {
  var next = katzDeliLine.shift();
  if (next === undefined) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${next}.`;
  }
}

function currentLine(katzDeliLine) {
  var lineup = "The line is currently: ";
  var length = katzDeliLine.length;

  if (length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 1; i <= length; i++) {
      lineup = lineup + (i) + ". " + katzDeliLine[i - 1];
      if (i < length) {
        lineup = lineup + ", "
      }
    }
    return lineup;
  }
}