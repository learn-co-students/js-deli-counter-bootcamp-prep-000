var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var lengthOfLine = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${lengthOfLine} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var listInfo = "";
    for(var i=0; i < katzDeliLine.length; i++) {
      if(i === katzDeliLine.length-1) {
        listInfo = listInfo + (i + 1) + ". " + katzDeliLine[i]
      } else {
        listInfo = listInfo + (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
    }
    return `The line is currently: ${listInfo}`;
  }
}
