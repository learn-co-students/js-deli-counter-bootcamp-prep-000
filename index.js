function takeANumber(katzDeliLine, name) {
  katzDeliLine[katzDeliLine.length] = name;
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var string = `The line is currently: 1. ${katzDeliLine[0]}`;
  if (katzDeliLine.length > 0) {
    for ( var i = 1; i < katzDeliLine.length; i++) {
      string = `${string}, ${i+1}. ${katzDeliLine[i]}`;
    }
    return string
  } else {
    return "The line is currently empty.";
  }
}