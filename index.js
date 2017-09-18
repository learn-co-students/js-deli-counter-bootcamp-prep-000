var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var place = katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${place} in line.`;
  }

function nowServing(katzDeliLine) {
  var serving = katzDeliLine.shift();
  if (katzDeliLine.length > 0) {
    return `Currently serving ${serving}.`;
  }
  else return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  } else {
    var newArray = [];
    var i = katzDeliLine.length - 1;
    for (;i >= 0; --i ) {
      newArray.unshift(`${i+1}. ${katzDeliLine[i]}`);
    }
  }
    return `The line is currently: ${newArray.join (', ')}`;
  }
